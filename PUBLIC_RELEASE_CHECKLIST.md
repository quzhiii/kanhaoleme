# Public Release Checklist

Date: 2026-07-02

Scope: current repository prepared for Genesis hackathon public review.

## Release Boundary

This repository is a hackathon review demo for Kanhaoleme. It must not include secrets, real health data, private business materials, or claims that unfinished backend/AI/community capabilities are complete.

## Checklist

| Item | Status | Notes |
| --- | --- | --- |
| No `.env`, `.env.local`, `.env.production` in public release | Needs action | `.env.example` exists and contains a Gemini placeholder. Keep only if sanitized, or remove from public branch. |
| No API key, token, cookie, session, Supabase key, OpenAI key, Gemini key, Vercel token | Needs action | Scan found no live secret pattern, but `.env.example` mentions `GEMINI_API_KEY`; this should be removed or replaced with a non-provider-specific placeholder for public release. |
| No real user health data | Pass | Current app uses 18 mock demo experiences. |
| No real medical records, invoices, consultation records, ID numbers, phone numbers, inpatient numbers | Pass | No matching real records found in source/docs scanned. |
| No private interview records | Pass for public docs/source | Existing private/business docs should not be included in public release. |
| No unpublished business plan details | Needs action | `kanhaoleme_project_docs_md/` includes BP, validation, and risk docs. Do not publish this directory. |
| No local absolute paths such as `E:\project\...` | Needs action | Found in `docs/plans/2026-07-02-project-progress-and-roadmap.md` and `docs/memory/project-context.md`; do not include these internal docs in public release. |
| No unauthorized images | Needs confirmation | Public app uses `public/assets/xiaokan/`; confirm usage rights before public push. |
| No named real doctors/hospitals/institutions with evaluation | Pass | Demo content avoids named doctor/hospital ranking. |
| No false claim of real AI Agent, real投稿, real合作机构 | Needs action | README and public docs must state current app is static demo with mock data only. |

## Search Commands Executed

Combined scan over `*.ts`, `*.tsx`, `*.js`, `*.jsx`, `*.json`, `*.md`, `*.env`, `*.example`, `*.css`, `*.html` for:

```text
sk-|api_key|token|secret|password|SUPABASE|OPENAI|GEMINI|\.env|E:\\|[0-9]{11}|Chinese ID-number pattern
```

Additional glob scan:

```text
**/.env*
```

## Findings

### Must Exclude From Public Release

- `kanhaoleme_project_docs_md/`: contains private planning/business context and policy references not needed for public review.
- `docs/memory/project-context.md`: includes local absolute path.
- `docs/plans/2026-07-02-project-progress-and-roadmap.md`: includes local absolute path and internal status notes.
- `docs/plans/2026-06-09-v02-to-mvp-foundation.md`: internal execution plan, not needed in public release.
- `.worktrees/`, `node_modules/`, `dist/`, zip archives.

### Must Sanitize Or Remove

- `.env.example`: contains `GEMINI_API_KEY` placeholder and Gemini runtime comments. Remove from public release unless the public demo actually requires provider configuration, which it currently does not.
- `metadata.json`: contains `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`, but the current demo does not use real Gemini or medical AI. Remove from public release or replace with neutral metadata.

### False Positives Reviewed

- `package-lock.json` includes package name `js-tokens`; this is not a secret.
- `vite.config.ts` uses `process.env.DISABLE_HMR`; this is not a secret.
- Policy reference URLs contain dates and numeric IDs; these are not personal identifiers.
- CSS color values and gradient numbers are not secrets.

## Recommended Public Repository Contents

Include:

- `src/`
- `public/assets/xiaokan/`
- `README.md`
- `docs/public/architecture.md`
- `docs/public/roadmap.md`
- `docs/public/safety-boundary.md`
- `docs/public/demo-script.md`
- `BUILD_AND_LINT_REPORT.md`
- `PUBLIC_RELEASE_CHECKLIST.md`
- `GENESIS_SUBMISSION.md`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tsconfig.json`
- `vercel.json`
- `.gitignore`

Exclude:

- `.env*`
- `metadata.json`
- `kanhaoleme_project_docs_md/`
- `docs/memory/`
- `docs/plans/` except public-facing reports if intentionally included
- `docs/operations/`
- `docs/adr/` if internal only; publish summarized versions under `docs/public/`
- `node_modules/`
- `dist/`
- `.worktrees/`
- `*.zip`
- local-only image source folders unless rights are confirmed.

## Current Public-Release Status

Not ready to push as-is. Prepare a sanitized public branch or export directory first, using the include/exclude list above.
