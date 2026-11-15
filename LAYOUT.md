# Layout framework (structure only)

Reverse-engineered from the LinguaChicago site (`Chicago-Linguistic-Advocacy-Project`) and mapped onto the sports discourse playground. Skeleton files contain placeholder comments (`<--[Slot]-->`) and layout utilities only. No copy, colors, typography, shadows, borders, radii, or background images.

## Page shell

```
<html>
  <body  flex min-h-screen flex-col>
    <SiteHeader />            sticky top-0 z-50, Container inside
    <main flex-1>{page}</main>
    <SiteFooter />            Container, 3-col grid, credits row
```

The source did not use `flex-1` on `<main>`; it is added here so the footer stays at the bottom on short pages.

## Wrapper primitives

| Primitive | Classes | Role |
| --- | --- | --- |
| `Container` | `mx-auto w-full max-w-7xl px-4 md:px-6` | Single width and gutter rule. The source repeated this string in every section; here it is defined once. |
| `Section` | outer `<section scroll-mt-20>`, inner `Container` + `py-*` | Full-bleed band outside, centered content inside. `contained={false}` for edge-to-edge split views. |
| Spacing scale | `sm: py-12`, `md: py-16 md:py-20`, `lg: py-20 md:py-24` | Vertical rhythm. |
| `PageHeader` | `Container pt-12 pb-8 md:pt-16`; h1 `mt-3 max-w-3xl`; intro `mt-4 max-w-2xl` | Top of every inner page. |

## Layout recipes (all breakpoints are mobile-first)

| Recipe | Utilities | Used in |
| --- | --- | --- |
| Header bar | `flex items-center justify-between gap-6 py-3` | Header |
| Desktop-only nav / mobile-only toggle | `hidden md:flex` / `md:hidden` | Header |
| Two-column text + figure | `grid items-center gap-12 lg:grid-cols-2 lg:gap-16` (`items-start` when the left column is long) | Home about, tool preview |
| Card grid | `grid gap-5 sm:grid-cols-2 lg:grid-cols-4` | Home about |
| Step grid | `grid gap-4 md:grid-cols-3` (3 steps), `md:grid-cols-2 lg:grid-cols-4` (4), `md:grid-cols-2 lg:grid-cols-5` (5) | Method brief, method page |
| Stat row | `grid gap-8 sm:grid-cols-3` | Hero, findings headline |
| Header row (heading left, link right) | `flex flex-col justify-between gap-6 md:flex-row md:items-end` | Method brief |
| CTA band | `flex flex-col items-start justify-between gap-6 md:flex-row md:items-center` | CTA band |
| Footer grid | `grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]` | Footer |
| Footer credits | `flex flex-col gap-2 md:flex-row md:justify-between` | Footer |
| Asymmetric split | `grid gap-12 lg:grid-cols-[1fr_1.3fr]`, `[1fr_1.4fr]`, `[1.4fr_1fr]` | Findings sections |
| Ranked row | `grid grid-cols-[2rem_1fr_auto] items-center gap-3` | Failure cases |
| Label / value row | `grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1` | Accuracy comparison |
| Explorer split view | `grid lg:grid-cols-[1fr_380px]`; aside `lg:max-h-[812px] lg:overflow-y-auto` | Decoder |
| Viewport with overlay | parent `relative h-[60vh] min-h-[440px] lg:h-[720px]`; overlay `pointer-events-none absolute bottom-4 left-4 z-10` | Decoder |
| Toolbar | `flex flex-wrap items-center gap-3 px-4 py-3 md:px-6`; right-aligned item `sm:ml-auto` | Decoder |
| Segmented control | `grid w-full grid-cols-4 sm:flex sm:w-auto` | Decoder toolbar |
| Sticky side column | `lg:sticky lg:top-20 lg:self-start` | Playground aside |
| Hero layers | parent `relative isolate overflow-hidden`; layers `absolute inset-0 -z-10` | Hero |
| Horizontal-scroll table | wrapper `overflow-x-auto`, table `w-full` | Community breakdown |

Breakpoints used: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.

## Route map (source to sports project)

| Source route | Source page content | New route | New page content |
| --- | --- | --- | --- |
| `/` | Hero, About, How it works, Solution, CTA | `/` | Hero, About, How it works, Tool preview, CTA |
| `/map/` | PageHeader + MapExplorer | `/decoder/` | PageHeader + DecoderExplorer |
| `/contribute/` | PageHeader + form/info grid + guide | `/playground/` | PageHeader + PlaygroundWorkspace |
| `/data/` | Headline, Benchmark, Rankings, Breakdown, Progress | `/findings/` | Headline, Accuracy, Failure cases, Community breakdown |
| `/method/` | Framework, Upload guide, Research framework | `/method/` | Framework, Annotation guide, Concepts |

## Notes

- With `trailingSlash: true` and `output: 'export'` (the source's GitHub Pages setup), nav hrefs end in `/`.
- In the source, the header showed three nav links plus a separate CTA button. The skeleton keeps that: `NAV` array plus a "Header CTA" slot.
- `sr-only` appears once, on the explorer's hidden section heading, which is structural labeling and not visual styling.
