Create a new React component at `components/$ARGUMENTS.tsx`.

Follow these rules:
- Use TypeScript — define a Props interface/type above the component
- Use Tailwind CSS for styling (responsive layout required)
- Add `"use client"` only if the component uses hooks or browser APIs
- Import UI primitives from `@/components/ui/*` (shadcn/ui) when appropriate
- Export the component as the default export
- Use `cn()` from `@/lib/utils` for conditional class merging
- Keep the component name PascalCase matching the filename
- Add Korean comments where logic isn't self-evident

After creating the file, show the full file path and usage example.
