# ASPIA Corporate Website

Built with Next.js · Tailwind CSS · GSAP · EmailJS

## Quick Start

```bash
npx create-next-app@latest aspia-website --js --tailwind --app=false
cd aspia-website

# Install animation + map + email dependencies
npm install gsap @gsap/react react-simple-maps react-tooltip emailjs-com

# Copy all files from this folder into the project
# Place main_bg.png in /public/

# Set up EmailJS
cp .env.local.example .env.local
# Fill in your EmailJS credentials (see below)

npm run dev
```

## EmailJS Setup (free, no backend needed)

1. Register at https://emailjs.com
2. Add Email Service (Gmail / Outlook)
3. Create a Template with variables: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key** into `.env.local`

## Hero Background Image

Place your background image at:
```
/public/main_bg.png
```
The Hero component references it as `/main_bg.png` via CSS `background-image`.

## Deployment (Vercel)

```bash
npm run build
npx vercel --prod
```

Add your `.env.local` variables in the Vercel dashboard under **Settings → Environment Variables**.

## Project Structure

```
aspia-website/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageTransition.jsx
│   └── sections/
│       ├── Hero.jsx           ← uses /public/main_bg.png
│       ├── ProductsSection.jsx
│       ├── ExportMap.jsx
│       ├── CertificationsSection.jsx
│       └── ContactForm.jsx
├── pages/
│   ├── _app.jsx
│   ├── index.jsx
│   ├── about.jsx
│   ├── products.jsx
│   ├── certifications.jsx
│   ├── map.jsx
│   └── contact.jsx
├── styles/globals.css
├── lib/gsapUtils.js
├── public/
│   └── main_bg.png   ← your hero image goes here
├── .env.local
├── tailwind.config.js
└── next.config.js
```
