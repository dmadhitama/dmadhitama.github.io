## Donny M. Adhitama - Portfolio

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and featuring an admin interface for easy content management.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Admin Dashboard**: Convenient interface to manage portfolio content
- **Static Site Generation**: Fast loading times with Next.js SSG
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Markdown Support**: Write projects and essays in markdown
- **SEO Optimized**: Built-in SEO best practices

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/dmadhitama/dmadhitama.github.io.git
cd dmadhitama.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin interface pages
│   ├── essays/            # Essays pages
│   ├── projects/          # Projects pages
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   └── ProjectCard.tsx    # Project card component
├── lib/                   # Utility functions
│   ├── data.ts           # Data fetching functions
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Helper functions
├── _data/                 # Content data
│   └── bio.json          # Personal information
├── projects/              # Project markdown files
├── essays/                # Essay markdown files
├── img/                   # Images and assets
└── public/               # Static files
```

## ✏️ Content Management

This portfolio uses a **simple markdown-based content system**. No database, no admin panel - just edit markdown files!

### Quick Start

All content is stored in markdown files in the `content/` folder:

```
content/
├── bio.md          # Your personal information
├── experience.md   # Work experience
├── education.md    # Education history
├── skills.md       # Technical skills
└── interests.md    # Your interests
```

### How to Edit Content

#### Edit Bio Information

Edit `_data/bio.json` to update:
- Personal information (name, email, website)
- Work experience
- Education
- Skills
- Interests

#### Add/Edit Projects

Create or edit markdown files in the `projects/` folder:

```markdown
---
layout: project
type: project
image: img/project-image.png
title: "Project Title"
date: 2024
published: true
labels:
  - Machine Learning
  - Python
  - TensorFlow
summary: "Brief project description"
---

## Project Description

Your detailed project content here...
```

#### Add/Edit Essays

Create or edit markdown files in the `essays/` folder:

```markdown
---
layout: essay
type: essay
title: "Essay Title"
date: 2024-01-01
published: true
labels:
  - Technology
  - AI
---

Your essay content here...
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy to GitHub Pages

1. Update `next.config.js` if needed for your repository
2. Build the project: `npm run build`
3. Push the `out/` directory to your `gh-pages` branch

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `out`

## 🎨 Customization

### Colors and Styling

Edit `app/globals.css` to customize the color scheme and design tokens.

### Components

Modify components in the `components/` directory to change the layout and design.

### Navigation

Edit `components/Navigation.tsx` to add or remove navigation links.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## 👤 Author

**Donny M. Adhitama**
- Website: [dmadhitama.github.io](https://dmadhitama.github.io)
- GitHub: [@dmadhitama](https://github.com/dmadhitama)
- LinkedIn: [dm-adhitama](https://linkedin.com/in/dm-adhitama)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ Star this repository if you find it helpful!

## 🌐 Deployment (GitHub Pages)

The site is a static Next.js export (`output: 'export'` → `out/`), deployed by `.github/workflows/main.yml` on every push to `main`.

One-time setup in **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
(If the source is "Deploy from a branch: main", GitHub serves the raw Next.js source, which has no `index.html`, so the site returns 404.)

Manual alternative: `npm run deploy` builds and pushes `out/` to the `gh-pages` branch; then set the Pages source to "Deploy from a branch: gh-pages / (root)".

Design based on the "Portfolio" Figma community file by Elias (CC BY 4.0): https://www.figma.com/community/file/1164933568884615740/portfolio
