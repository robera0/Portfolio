# Robera Ararsa — Portfolio

A React (Vite) + Tailwind frontend with a Node/Express backend for the contact form.
Same ticket-stub design system as the static version, now split into components.

## Structure

```
portfolio/
├── frontend/     React + Vite + Tailwind
│   └── src/
│       ├── components/   Nav, Hero, Work, About, Contact, Footer
│       ├── data/         content.js — all copy/data lives here
│       ├── hooks/        useReveal.js — scroll-reveal animation hook
│       └── index.css     design tokens, ticket-stub styles, textured bg
└── backend/      Express API (contact form endpoint)
    ├── server.js
    └── routes/contact.js
```

## Run it locally

**1. Backend** (API on port 4000)
```bash
cd backend
npm install
npm run dev
```

**2. Frontend** (dev server on port 5173, proxies /api to the backend)
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 — the contact form posts to `/api/contact`,
which the Vite dev proxy forwards to the Express server.

## Production build

```bash
cd frontend && npm run build      # outputs to frontend/dist
cd ../backend && npm start        # serves the built frontend + API on one port
```

Visit http://localhost:4000 — Express serves the static React build and the API
from the same origin, so nothing needs a proxy in production.

## Wiring up real email delivery

`backend/routes/contact.js` currently logs submissions to an in-memory array
(and the console) so the demo works with zero external services. To actually
receive messages, swap the `messages.push(entry)` line for either:

- a database write (MongoDB, Postgres, etc.), or
- an email send via `nodemailer` or a transactional API like Resend/SendGrid.

Add any API keys to a `.env` file in `backend/` (see `.env.example`) — `dotenv`
is already wired up in `server.js`.

## Editing content

All copy — projects, experience, education, contact links — lives in
`frontend/src/data/content.js`. Update it there rather than in the components.
