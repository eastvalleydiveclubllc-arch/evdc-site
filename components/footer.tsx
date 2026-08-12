import { site, PARENT_PORTAL_URL } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-display text-xl text-bone">{site.name}</div>
          <div className="mt-2 text-sm text-stone-500">{site.address}</div>
        </div>

        <div className="flex items-center gap-6 text-sm text-stone-400">
          <a href={PARENT_PORTAL_URL} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors">
            Parent Portal
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors">
            Instagram
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors">
            Facebook
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-bone transition-colors">
            Email
          </a>
          <a href={site.phoneHref} className="hover:text-bone transition-colors">
            {site.phone}
          </a>
        </div>

        <div className="text-xs text-stone-600">
          © {year} {site.name}
        </div>
      </div>
    </footer>
  );
}
