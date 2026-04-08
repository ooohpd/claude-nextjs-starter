/** 사이트 메타·내비게이션 단일 출처 */

export const siteConfig = {
  name: "Next.js Starter",
  description:
    "Next.js, TypeScript, Tailwind CSS, shadcn/ui, lucide-react로 빠르게 시작하세요.",
  tagline: "모던 웹 스타터킷",
} as const;

export type NavItem = {
  title: string;
  href: string;
};

/** 헤더·푸터·사이트맵에서 공통 사용 */
export const mainNav: readonly NavItem[] = [
  { title: "홈", href: "/" },
  { title: "UI 예제", href: "/examples/ui" },
  { title: "폼 예제", href: "/examples/forms" },
  { title: "소개", href: "/examples/about" },
] as const;

export type ExamplePreview = {
  title: string;
  description: string;
  href: string;
};

/** 메인 페이지 예제 카드 섹션 */
export const examplePreviews: readonly ExamplePreview[] = [
  {
    title: "컴포넌트 쇼케이스",
    description: "Button, Card, Badge 등 shadcn/ui 컴포넌트 조합을 확인합니다.",
    href: "/examples/ui",
  },
  {
    title: "폼 레이아웃",
    description: "Input, Label을 활용한 기본 폼 레이아웃 예시입니다.",
    href: "/examples/forms",
  },
  {
    title: "스타터 소개",
    description: "이 템플릿의 구성과 목적을 간단히 정리했습니다.",
    href: "/examples/about",
  },
] as const;

/** 스택 뱃지용 (메인 페이지) */
export const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "lucide-react",
] as const;
