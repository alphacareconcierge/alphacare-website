# AlphaCare Concierge Care Management

Production-ready website for AlphaCare Concierge Care Management, built with Next.js, TypeScript, and Tailwind CSS.

## Brand

The site implements the provided AlphaCare visual identity without redesigning the brand:

- Deep Navy: `#10243F`
- Muted Gold: `#C6A15B`
- Warm Ivory: `#F8F5EF`
- Soft Gray: `#58657A`
- Headings: Cormorant Garamond
- Body: Inter

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Contact Form

The contact form posts to `/api/contact`. Required fields are validated server-side.

For production delivery, configure a secure intake destination in Vercel:

```bash
CONTACT_WEBHOOK_URL=https://your-secure-form-endpoint.example.com
```

If `CONTACT_WEBHOOK_URL` is not configured, the API still validates and returns success so the front end can be reviewed safely during staging.

The public form intentionally includes this PHI notice:

> Please do not include detailed medical information or protected health information (PHI) in this form. Sensitive information will be collected through a secure process after initial contact.

## Vercel Deployment

1. Import `alphacareconcierge/alphacare-website` into Vercel.
2. Confirm the framework preset is Next.js.
3. Add `CONTACT_WEBHOOK_URL` if a secure intake provider is available.
4. Deploy.

## Pages

- Home
- About
- Services
- Contact
- Privacy Policy
- Terms of Use

## Accessibility and SEO

The site uses semantic page structure, keyboard-accessible navigation, visible focus states, responsive layouts, page metadata, Open Graph metadata, and accessible form labels.
