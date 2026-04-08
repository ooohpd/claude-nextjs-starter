# Next.js 스타터킷

Next.js(App Router), TypeScript, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/), [lucide-react](https://lucide.dev/)로 빠르게 UI를 구성할 수 있는 스타터 템플릿입니다.

## 스택

- **Next.js** — App Router, React 19
- **TypeScript**
- **Tailwind CSS** v4
- **shadcn/ui** (Base UI 기반, preset: base-nova)
- **lucide-react** — 아이콘

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 |
| `npm run lint` | ESLint |

## 폴더 구조

| 경로 | 역할 |
|------|------|
| `app/` | 라우트·페이지·레이아웃 (`app/page.tsx`, `app/examples/...`) |
| `components/layout/` | `SiteHeader`, `SiteFooter`, `MainShell` 등 공통 레이아웃 |
| `components/ui/` | shadcn CLI로 추가한 UI 컴포넌트 |
| `lib/utils.ts` | `cn()` 등 유틸 |
| `lib/constants.ts` | 사이트명·내비·메인 카드 데이터 등 단일 출처 |
| `lib/format.ts` | 날짜·숫자 포맷 헬퍼 |

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [컴포넌트명]
```

예: `npx shadcn@latest add dialog`

## 배포

[Vercel](https://vercel.com/new)에 연결하거나, `npm run build` 후 정적/Node 호스팅 환경에 맞게 배포하면 됩니다.
