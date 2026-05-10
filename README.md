# Premium Next.js Portfolio

A high-fidelity developer portfolio built with Next.js 14 App Router, Tailwind CSS, and real-time GitHub API integration.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: CSS keyframes + canvas particles
- **Contact Form**: Formspree
- **GitHub Stats**: GitHub REST API
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_github_token
```

## Deployment

Push to `main` branch — the GitHub Actions workflow deploys automatically to Vercel.

Set these secrets in your GitHub repository:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
