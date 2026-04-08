import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { formatNumber } from "@/lib/format";

export const metadata = {
  title: "폼 예제",
};

export default function ExamplesFormsPage() {
  const sample = formatNumber(1234567.89, "ko-KR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col gap-8">
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
          폼 레이아웃
        </h1>
        <p className="text-muted-foreground text-sm">
          Input·Label 기반 단순 레이아웃입니다. 숫자 포맷 예:{" "}
          <span className="text-foreground font-medium">{sample}</span>
        </p>
      </div>

      <Separator />

      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>연락처 (데모)</CardTitle>
          <CardDescription>
            서버 액션·검증은 프로젝트 요구에 맞게 추가하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" name="name" placeholder="홍길동" autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="note">메모</Label>
            <Input id="note" name="note" placeholder="선택 사항" />
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button type="button" variant="outline">
            초기화
          </Button>
          <Button type="submit">저장</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
