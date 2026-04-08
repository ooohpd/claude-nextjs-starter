"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className={cn("flex flex-col gap-1 md:flex-row md:items-center md:gap-6", className)}>
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="text-muted-foreground hover:text-foreground rounded-md px-2 py-1.5 text-sm font-medium transition-colors md:px-0 md:py-0"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-heading flex items-center gap-2 text-base font-semibold tracking-tight">
          <span className="bg-primary text-primary-foreground inline-flex size-8 items-center justify-center rounded-md text-xs">
            NS
          </span>
          {siteConfig.name}
        </Link>

        <NavLinks className="hidden md:flex" />

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                className="md:hidden"
                aria-label="메뉴 열기"
              />
            }
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle>메뉴</SheetTitle>
            </SheetHeader>
            <NavLinks className="mt-4" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
