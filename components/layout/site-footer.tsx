import { siteConfig } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto flex flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. Next.js · TypeScript · Tailwind · shadcn/ui
        </p>
        <p className="text-xs md:text-right">{siteConfig.tagline}</p>
      </div>
    </footer>
  );
}
