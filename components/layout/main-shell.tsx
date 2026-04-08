import { cn } from "@/lib/utils";

type MainShellProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * 본문 영역: container·세로 패딩 통일
 */
export function MainShell({ children, className }: MainShellProps) {
  return (
    <main className={cn("flex w-full flex-1 flex-col", className)}>
      <div className="container mx-auto flex flex-1 flex-col px-4 py-8 md:py-10">
        {children}
      </div>
    </main>
  );
}
