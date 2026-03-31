# ASPIA Corporate Website

Built with Next.js · Tailwind CSS · GSAP · D3.js

## 🚀 Quick Start for All Platforms (Windows/Mac/Linux)

### Prerequisites
- Node.js (version 18 or higher) - [Download here](https://nodejs.org/)
- Git - [Download here](https://git-scm.com/)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sridivyansh0511-beep/Aspia.git
   cd Aspia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your EmailJS credentials (see EmailJS section below).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📧 EmailJS Setup (Free, No Backend Required)

1. Register at [https://emailjs.com](https://emailjs.com)
2. Add an Email Service (Gmail/Outlook)
3. Create a Template with variables: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key** into `.env.local`

Example `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 🖼️ Assets

All product images are already included in the `/public/` folder. The hero background image should be placed at:
```
/public/main_bg.png
```

### 🚀 Deployment

#### Build for Production
```bash
npm run build
npm start
```

#### Deploy to Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### 📁 Project Structure

```
Aspia/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageTransition.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── ProductsSection.jsx
│   │       ├── ExportMap.jsx
│   │       ├── CertificationsSection.jsx
│   │       └── ContactForm.jsx
│   ├── pages/
│   │   ├── _app.jsx
│   │   ├── index.jsx
│   │   ├── about.jsx
│   │   ├── products.jsx
│   │   ├── certifications.jsx
│   │   ├── map.jsx
│   │   └── contact.jsx
│   ├── data/
│   │   └── products.js
│   └── styles/
│       └── globals.css
├── public/
│   ├── main_bg.png (add your hero image here)
│   └── [product images]
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
└── next.config.js
```

### 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### 💻 Windows-Specific Notes

- **PowerShell users**: Use `Copy-Item .env.example .env.local` instead of `cp`
- **Command Prompt users**: Use `copy .env.example .env.local` instead of `cp`
- **Node.js installation**: Make sure to add Node.js to your PATH during installation
- **Git installation**: Choose "Use Git from the Windows Command Prompt" during setup

### 🐛 Troubleshooting

**Common Issues:**
1. **"Node.js not found"** - Restart your terminal/command prompt after installing Node.js
2. **"Module not found"** - Run `npm install` again
3. **"Permission denied"** - Run Command Prompt as Administrator
4. **Port 3000 already in use** - The app will automatically use the next available port (3001, 3002, etc.)

### 📄 License

This project is private and proprietary.

### 🤝 Support

For issues or questions, please contact the development team.
