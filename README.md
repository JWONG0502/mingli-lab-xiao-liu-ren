# Xiao Liu Ren Lab

English-first static learning tool for Xiao Liu Ren.

## Technical Decisions

- Next.js App Router with `output: "export"` for GitHub Pages-compatible static output.
- `GITHUB_PAGES_BASE_PATH` can be set for repository-path deployment.
- `lunar-typescript` is the selected lunar conversion library.
- `@date-fns/tz` is included for IANA time zone handling.
- Reflection Topic stays in React state only and is not persisted.

## Commands

```bash
npm install
npm run dev
npm run build
npm run test
```

## GitHub Pages

For `https://username.github.io/repo-name/`, build with:

```bash
GITHUB_PAGES_BASE_PATH=/repo-name npm run build
```

For a root domain or custom domain, leave `GITHUB_PAGES_BASE_PATH` empty.
