# BRY QA Solutions

A production-ready website for **BRY QA Solutions, LLC** — a QA engineering services company serving federal agencies (prime/subprime) and commercial organizations.

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Framework | React 19 + TypeScript 5.9 (Vite 7) |
| Styling   | Tailwind CSS 4                      |
| Testing   | Vitest, React Testing Library       |
| Forms     | Formspree                           |
| Routing   | React Router                        |

## Project Structure

```
bry-qa-solutions/
├── frontend/                 # React SPA
│   └── src/
│       ├── components/       # UI primitives + layout
│       ├── features/         # Feature modules (landing, contact)
│       ├── pages/            # Route-level pages
│       └── lib/              # Constants + data
├── .claude/                  # Claude Code skills + hooks
├── docs/                     # Blueprint + ADRs
└── scripts/                  # Build + test automation
```

## Quick Start

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+

### Development

```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

## Quality Gates

All gates must pass before any change is considered complete:

```bash
cd frontend && npm run lint        # ESLint
cd frontend && npm test -- --run   # 11 tests (Vitest)
cd frontend && npm run build       # TypeScript + production build
```

Or run everything:
```bash
bash scripts/test-all.sh
```

## Pages

| Route               | Page            | Description                                    |
|----------------------|-----------------|------------------------------------------------|
| `/`                  | Home            | Hero, services, stats, process, testimonials   |
| `/services`          | Services        | Service overview with detail links             |
| `/services/:slug`    | Service Detail  | Individual service capabilities                |
| `/technologies`      | Technologies    | Tools and frameworks expertise                 |
| `/about`             | About           | Company info, leadership, certifications       |
| `/contact`           | Contact         | Lead form (Formspree) + contact info sidebar   |

## Deployment

### Build Production Artifacts

```bash
cd frontend && npm run build
# Output: frontend/dist/
```

Serve `frontend/dist/` with any static file host (Cloudflare Pages, Netlify, Vercel, nginx, etc.).
