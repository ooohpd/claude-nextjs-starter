import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { siteConfig, techStack } from "@/lib/constants";

export const metadata = {
  title: "소개",
};

export default function ExamplesAboutPage() {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "w-fit gap-1 px-0",
          )}
        >
          <ArrowLeft className="size-4" />
          홈으로
        </Link>
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          스타터킷 소개
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {siteConfig.description}
        </p>
      </div>

      <Separator />

      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-base font-semibold">포함 스택</h2>
        <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
          {techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-base font-semibold">폴더 역할</h2>
        <dl className="text-muted-foreground grid gap-2 text-sm">
          <div>
            <dt className="text-foreground font-medium">app/</dt>
            <dd>App Router 페이지·레이아웃</dd>
          </div>
          <div>
            <dt className="text-foreground font-medium">components/layout/</dt>
            <dd>헤더·푸터·MainShell 등 공통 레이아웃</dd>
          </div>
          <div>
            <dt className="text-foreground font-medium">components/ui/</dt>
            <dd>shadcn/ui 컴포넌트 (add로 확장)</dd>
          </div>
          <div>
            <dt className="text-foreground font-medium">lib/</dt>
            <dd>utils(cn), constants, format 등</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
