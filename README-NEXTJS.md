# Instagram Video Downloader - Next.js

This application has been converted from Vite to Next.js for improved SEO and performance.

## Why Next.js?

- **Server-Side Rendering (SSR)**: Better SEO as search engines can crawl the fully rendered HTML
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **Metadata API**: Easy management of SEO tags, Open Graph, and Twitter cards
- **Automatic sitemap and robots.txt**: Built-in support for SEO essentials
- **Image Optimization**: Automatic image optimization and lazy loading
- **API Routes**: Built-in backend API support (ready for future Instagram API integration)

## Project Structure

```
/app
  ├── layout.tsx          # Root layout with SEO metadata and structured data
  ├── page.tsx            # Home page (main content)
  ├── globals.css         # Global styles (Tailwind CSS)
  ├── sitemap.ts          # Automatic sitemap generation
  └── robots.ts           # Robots.txt configuration

/components
  ├── VideoDownloader.tsx # Client component with interactive form
  ├── Features.tsx        # Server component (static)
  └── HowItWorks.tsx      # Server component (static)
```

## SEO Features Implemented

### 1. Comprehensive Metadata
- Title, description, and keywords optimized for search engines
- Open Graph tags for social media sharing
- Twitter card integration
- Viewport and robots meta tags

### 2. Structured Data (JSON-LD)
- Schema.org WebApplication markup
- Rich snippets support for better search visibility

### 3. Sitemap & Robots.txt
- Automatic sitemap.xml generation
- robots.txt for search engine crawlers

### 4. Server Components
- Features and HowItWorks sections are server components
- Faster initial page load and better SEO

### 5. Client Components
- VideoDownloader marked with 'use client' for interactivity
- Optimal bundle splitting

## Running the Application

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## Future Backend Integration

When you're ready to implement real Instagram video downloading:

1. **Create API Route**: Add `/app/api/download/route.ts`
2. **Backend Service**: Use a third-party Instagram API or build your own scraper
3. **Update VideoDownloader**: Replace mock API call with real fetch to your API route

Example API route structure:
```typescript
// /app/api/download/route.ts
export async function POST(request: Request) {
  const { url } = await request.json();
  // Process Instagram URL and return video data
  return Response.json({ videoUrl, thumbnail, title, etc });
}
```

## Environment Variables

Create a `.env.local` file for sensitive data:
```
INSTAGRAM_API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Port: 3000

## Performance Optimizations

- Static assets cached automatically
- Automatic code splitting
- Image optimization with next/image
- Font optimization
- Minification and compression

## SEO Best Practices Included

✅ Semantic HTML structure
✅ Meta tags and descriptions
✅ Open Graph protocol
✅ Twitter Cards
✅ JSON-LD structured data
✅ Sitemap.xml
✅ Robots.txt
✅ Mobile-responsive design
✅ Fast page load times
✅ Accessible markup

## Notes

- The old `/App.tsx` file is now unused (Next.js uses `/app/page.tsx`)
- All components in `/components` work with Next.js
- UI components from `/components/ui` are compatible
