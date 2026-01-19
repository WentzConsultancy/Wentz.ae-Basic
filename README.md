# Wentz.ae - Cybersecurity Automation Website

A professional Next.js 14 website for Wentz, showcasing cybersecurity automation expertise and services.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Dark Professional Theme**: Blues and grays color scheme optimized for cybersecurity branding
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Static export for fast loading times
- **Azure Ready**: Configured for Azure Static Web Apps deployment

## Sections

1. **Hero**: Compelling headline about transforming expertise into automation revenue
2. **Investment Thesis**: Market opportunity, value proposition, and scalable model
3. **3-Phase Model**: Advisory Foundation → Automation Productization → Scale & Expansion
4. **Team**: Principal-level team members
5. **Dubai Opportunity**: Strategic gateway to EMEA and APAC markets
6. **Contact**: UAE-focused contact information (EMAAR Square, Dubai)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an `out` folder with static files ready for deployment.

## Deployment to Azure Static Web Apps

1. Create a Static Web App resource in Azure Portal
2. Connect your GitHub repository
3. Azure will automatically detect the `.github/workflows/azure-static-web-apps.yml` workflow
4. Configure the following settings:
   - App location: `/`
   - Output location: `out`
   - API location: (leave empty)

The site will automatically deploy on every push to the `main` branch.

### Manual Deployment

If deploying manually, upload the contents of the `out` folder to your Azure Static Web App.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page component
├── components/
│   ├── Contact.tsx       # Contact section
│   ├── DubaiOpportunity.tsx
│   ├── Hero.tsx          # Hero section
│   ├── InvestmentThesis.tsx
│   ├── Navigation.tsx    # Navigation bar
│   ├── Team.tsx          # Team section
│   └── ThreePhaseModel.tsx
├── public/               # Static assets (images, etc.)
└── staticwebapp.config.json  # Azure Static Web Apps configuration
```

## Customization

### Colors

The dark theme uses a blue/gray palette defined in `app/globals.css`:
- Background: `#0a0e27` (slate-900)
- Accent: Blue-400/500/600
- Text: Gray-300/400

### Content

Update component files in the `components/` directory to modify content. Each section is modular and self-contained.

## License

Copyright © 2025 Wentz. All rights reserved.
