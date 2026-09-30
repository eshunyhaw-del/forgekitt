import Link from "next/link";
import { industries, stacks, templateTypes, slugify } from "@/lib/filters";

type Active = Record<string, string | undefined>;

const groups = [
  { title: "Industry", param: "industry", items: industries, scroll: true },
  { title: "Tech stack", param: "stack", items: stacks, scroll: false },
  { title: "Template type", param: "category", items: templateTypes, scroll: false },
  { title: "Price", param: "price", items: ["Free", "Paid"], scroll: false },
];

// Desktop filter sidebar. Every option is a plain link that keeps the other
// active filters and the search text, so it works without JavaScript.
export function DirectorySidebar({ active, basePath }: { active: Active; basePath: "/" | "/templates" }) {
  const href = (param: string, value?: string) => {
    const params = new URLSearchParams();
    for (const [key, current] of Object.entries(active)) if (current && key !== param) params.set(key, current);
    if (value) params.set(param, value);
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };
  const anyActive = Object.values(active).some(Boolean);
  return <aside className="directory-sidebar" aria-label="Template filters">
    <div className="sidebar-head"><strong>Filters</strong>{anyActive && <Link href={basePath}>Clear all</Link>}</div>
    {groups.map((group) => <fieldset key={group.param} className="sidebar-group">
      <legend>{group.title}</legend>
      <div className={group.scroll ? "sidebar-list sidebar-scroll" : "sidebar-list"}>
        {group.items.map((item) => {
          const value = slugify(item);
          const checked = active[group.param] === value;
          return <Link key={item} className="sidebar-option" href={href(group.param, checked ? undefined : value)} aria-current={checked ? "true" : undefined} rel="nofollow"><span className="sidebar-box" data-checked={checked} aria-hidden="true" />{item}</Link>;
        })}
      </div>
    </fieldset>)}
  </aside>;
}
