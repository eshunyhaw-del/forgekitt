import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return <span className={`logo ${className}`.trim()}>
    <Image className="logo-light" src="/logo.png" alt="Forge" width={423} height={54} priority />
    <Image className="logo-dark" src="/logo-dark.png" alt="" aria-hidden="true" width={423} height={54} priority />
  </span>;
}
