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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "UI 예제",
};

export default function ExamplesUiPage() {
  const today = formatDate(new Date());

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
          컴포넌트 쇼케이스
        </h1>
        <p className="text-muted-foreground text-sm">
          Button, Card, Badge, Separator 조합 예시입니다. 오늘 날짜:{" "}
          <span className="text-foreground font-medium">{today}</span>
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>버튼 변형</CardTitle>
            <CardDescription>주요 variant·크기 조합</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>기본</Button>
            <Button variant="secondary">보조</Button>
            <Button variant="outline">외곽선</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>배지</CardTitle>
            <CardDescription>상태·라벨 표시</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>기본</Badge>
            <Badge variant="secondary">보조</Badge>
            <Badge variant="outline">외곽</Badge>
            <Badge variant="destructive">경고</Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>카드 푸터 액션</CardTitle>
          <CardDescription>레이아웃만 참고용입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            본문 영역에 설명이나 표를 넣을 수 있습니다.
          </p>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">취소</Button>
          <Button>확인</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
