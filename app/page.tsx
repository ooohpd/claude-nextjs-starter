import Link from "next/link";
import { ArrowRight, Boxes, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { examplePreviews, siteConfig, techStack } from "@/lib/constants";

const exampleIcons = [Sparkles, Boxes, ArrowRight] as const;

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-12 md:gap-16">
      <section className="flex flex-col gap-6 md:max-w-3xl">
        <Badge variant="secondary" className="w-fit">
          {siteConfig.tagline}
        </Badge>
        <h1 className="font-heading text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/examples/ui"
            className={cn(
              buttonVariants(),
              "inline-flex gap-1.5 has-data-[icon=inline-end]:pr-2",
            )}
          >
            UI 예제 보기
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Link>
          <Link
            href="/examples/forms"
            className={buttonVariants({ variant: "outline" })}
          >
            폼 예제
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold tracking-tight">
          예제 페이지
        </h2>
        <p className="text-muted-foreground text-sm">
          shadcn/ui 컴포넌트와 레이아웃 패턴을 바로 확인할 수 있습니다.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examplePreviews.map((item, i) => {
            const Icon = exampleIcons[i] ?? Sparkles;
            return (
              <Card key={item.href} className="flex flex-col">
                <CardHeader>
                  <div className="text-primary mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "w-full justify-center gap-1.5 has-data-[icon=inline-end]:pr-2",
                    )}
                  >
                    이동
                    <ArrowRight className="size-4" data-icon="inline-end" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
