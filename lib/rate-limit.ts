import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Optional, best-effort rate limiting. If Upstash env vars are not set (e.g. local
// dev, or before you create a free Upstash Redis), this is a no-op so nothing breaks.

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;

type Window = `${number} s` | `${number} m` | `${number} h`;

function make(limit: number, window: Window) {
  if (!redis) return null;
  return new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(limit, window), prefix: "forge-rl", analytics: false });
}

const limiters = {
  download: make(30, "1 m"),
  checkout: make(10, "1 m"),
};

/**
 * Returns { ok: true } when allowed (or when rate limiting is not configured),
 * and { ok: false } when the identifier has exceeded the limit.
 */
export async function checkRateLimit(kind: keyof typeof limiters, identifier: string) {
  const limiter = limiters[kind];
  if (!limiter) return { ok: true as const };
  try {
    const { success } = await limiter.limit(`${kind}:${identifier}`);
    return { ok: success };
  } catch {
    // Never let a limiter outage block a legitimate request.
    return { ok: true as const };
  }
}
