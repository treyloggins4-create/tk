# TK Prime Services LLC Website

A modern, responsive website built with Next.js for TK Prime Services LLC, a professional power washing and cleaning services company.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Contact Form**: Interactive contact form for quote requests
- **Service Showcase**: Detailed service pages highlighting power washing and add-on services
- **Professional Branding**: Custom branding and color scheme

## Services Offered

- **Power Washing**: Driveways, sidewalks, patios, and exterior surfaces
- **Leaf Cleanup**: Complete yard cleanup and leaf removal
- **Junk Removal**: Efficient debris and junk removal services
- **Gutter Cleaning**: Professional gutter cleaning and maintenance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up Google Maps API:
   - Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
   - Create a `.env.local` file in the root directory
   - Add your API key: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Services.tsx
├── public/
└── package.json
```

## Customization

The website is fully customizable through:
- Tailwind CSS configuration
- Component props and styling
- Content updates in component files
- Color scheme in `tailwind.config.js`

## Deployment

The website can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS
- DigitalOcean

## Contact Information

- **Phone**: (555) 123-4567
- **Email**: info@tkprimeservices.com
- **Service Area**: Local and surrounding areas

## License

© 2024 TK Prime Services LLC. All rights reserved.
