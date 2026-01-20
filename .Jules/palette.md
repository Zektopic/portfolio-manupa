## 2024-03-24 - [Accessible Icon-Only Buttons]
**Learning:** Icon-only buttons (like social links) often lack accessible names, making them invisible or confusing to screen reader users.
**Action:** Always add `aria-label` to the interactive element (e.g., `<a>` or `<button>`) wrapping the icon. Adding a `title` attribute provides a native tooltip for sighted users as well.

## 2024-03-24 - [Avoid Environment Artifacts]
**Learning:** Running `pnpm dev` or `pnpm install` can generate environment-specific files like `next-env.d.ts` or lockfiles that shouldn't be committed if they weren't tracked before.
**Action:** Always check `git status` (or `list_files` in this context) before submitting to ensure no unintended files are included.

## 2026-01-20 - [Radix State Styling]
**Learning:** Shadcn/Radix components expose state via `data-state` attributes. To style children (like icons) based on this state, use the Tailwind `group` class on the component receiving the state, and `group-data-[state=open]:{utility}` on the child.
**Action:** Use this pattern for all collapsible/expandable indicators to ensure visual feedback matches interaction state.
