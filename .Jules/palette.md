## 2024-03-24 - [Accessible Icon-Only Buttons]
**Learning:** Icon-only buttons (like social links) often lack accessible names, making them invisible or confusing to screen reader users.
**Action:** Always add `aria-label` to the interactive element (e.g., `<a>` or `<button>`) wrapping the icon. Adding a `title` attribute provides a native tooltip for sighted users as well.

## 2024-03-24 - [Avoid Environment Artifacts]
**Learning:** Running `pnpm dev` or `pnpm install` can generate environment-specific files like `next-env.d.ts` or lockfiles that shouldn't be committed if they weren't tracked before.
**Action:** Always check `git status` (or `list_files` in this context) before submitting to ensure no unintended files are included.

## 2026-01-17 - [Valid HTML Nesting for Link Buttons]
**Learning:** Wrapping a `<Button>` component (which renders a `<button>`) inside an `<a>` tag is invalid HTML.
**Action:** Use the `asChild` prop on the `<Button>` component and nest the `<a>` tag inside it. This renders a single `<a>` element with button styling, maintaining semantic validity and accessibility.
## 2026-01-20 - [Radix State Styling]
**Learning:** Shadcn/Radix components expose state via `data-state` attributes. To style children (like icons) based on this state, use the Tailwind `group` class on the component receiving the state, and `group-data-[state=open]:{utility}` on the child.
**Action:** Use this pattern for all collapsible/expandable indicators to ensure visual feedback matches interaction state.
## 2024-05-22 - [Invalid HTML Nesting with UI Components]
**Learning:** Wrapping a UI library `Button` (which renders a `<button>`) inside an `<a>` tag creates invalid HTML (`<a ...><button ...>`), which causes accessibility issues.
**Action:** Use the `asChild` prop (if supported by the UI library, like Radix UI Slot) on the `Button` component and nest the `<a>` tag inside it to merge props correctly and render a single `<a>` element with button styles.
## 2025-05-18 - [Invalid Interactive Nesting]
**Learning:** Wrapping a `Button` component with an anchor `<a>` tag results in invalid HTML (`<a><button>...`) which can confuse screen readers and keyboard navigation.
**Action:** Use the `asChild` prop on the `Button` component (e.g., `<Button asChild><a href="...">...</a></Button>`) to merge styles onto the anchor tag, maintaining valid HTML semantics.
## 2026-01-23 - [Button as Child for Links]
**Learning:** Wrapping a `<Button>` component inside an `<a>` tag results in invalid HTML (`<a ...><button ...>`) which can confuse screen readers.
**Action:** Use the `asChild` prop on the `Button` component and place the `<a>` tag *inside* it. This renders the `<a>` with button styles, maintaining valid HTML semantics.

## 2025-05-23 - [Actionable Metadata]
**Learning:** Static metadata like location often feels like a dead end. Users expect to be able to interact with it.
**Action:** Convert static metadata fields (location, email, phone) into actionable links (maps, mailto, tel) to reduce friction and add delight.

## 2025-05-24 - [Global Fixed Elements Stacking]
**Learning:** Placing fixed elements (like 'Scroll to Top') early in `layout.tsx` (e.g., before `{children}`) can cause them to be intercepted by page content, even with high z-index, if the page content creates a new stacking context or sits higher in the DOM order without z-index management.
**Action:** Always place global fixed overlays/buttons at the very end of the `<body>` in `layout.tsx` to ensure they naturally stack on top of all page content.
