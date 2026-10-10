import fs from 'fs';
import path from 'path';
import { renderRouteHtml } from '../services/seoPrerender';

// All 53 routes from public/sitemap.xml
const SITEMAP_ROUTES = [
  '/',
  '/about',
  '/products',
  '/industries',
  '/company',
  '/services',
  '/contact',

  // Bulk Cryogenic & Industrial Gas Products
  '/products/bulk-cryogenic',
  '/products/industrial-cylinder',
  '/products/specialty-calibration',
  '/products/liquid-nitrogen',
  '/products/liquid-oxygen',
  '/products/liquid-argon',
  '/products/liquid-carbon-dioxide',
  '/products/gaseous-nitrogen',
  '/products/carbon-dioxide-gas',
  '/products/hydrogen-gas',
  '/products/dissolved-acetylene',
  '/products/helium-gas',
  '/products/compressed-air',
  '/products/high-purity-oxygen',
  '/products/high-purity-argon',
  '/products/calibration-gas-mixtures',
  '/products/sulphur-dioxide',
  '/products/hydrogen-chloride',
  '/products/chlorine-gas',
  '/products/sulfur-hexafluoride',
  '/products/nitrous-oxide',
  '/products/carbon-monoxide',
  '/products/ethylene-gas',
  '/products/methane-gas',
  '/products/propane-gas',
  '/products/hydrogen-sulfide',
  '/products/other',

  // Industry Sector Solutions
  '/industries/metals-manufacturing',
  '/industries/glass-ceramics',
  '/industries/chemicals-process',
  '/industries/life-sciences',
  '/industries/food-beverage',
  '/industries/energy-infrastructure',
  '/industries/water-environment',
  '/industries/electronics-semiconductor',

  // Company Hub & Divisions
  '/company/our-group',
  '/company/manufacturing-infrastructure',
  '/company/quality-safety',
  '/company/supply-chain-logistics',
  '/company/careers',
  '/company/sustainability',

  // Engineered Solutions
  '/solutions/bulk-gas-supply',
  '/solutions/cylinder-gas-supply',
  '/solutions/cryogenic-engineering',
  '/solutions/cylinder-services',
  '/solutions/export',

  // Additional core routes / aliases
  '/company/about',

  // Hard 404 Error Route
  '/404'
];

async function runPrerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Run "vite build" first.`);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');
  console.log(`Starting pre-rendering for ${SITEMAP_ROUTES.length} routes...`);

  let renderedCount = 0;
  let errorCount = 0;

  for (const route of SITEMAP_ROUTES) {
    try {
      const { status, html, seo } = renderRouteHtml(route, baseTemplate);

      if (!seo.isFound && route !== '/404') {
        console.warn(`[WARNING] Route not found in catalog: ${route}`);
      }

      if (route === '/') {
        // Update root dist/index.html
        fs.writeFileSync(templatePath, html, 'utf-8');
      } else if (route === '/404') {
        // Write standard 404 page for static hosts (GitHub Pages, Vercel, Netlify)
        fs.writeFileSync(path.join(distDir, '404.html'), html, 'utf-8');
        const dir404 = path.join(distDir, '404');
        if (!fs.existsSync(dir404)) fs.mkdirSync(dir404, { recursive: true });
        fs.writeFileSync(path.join(dir404, 'index.html'), html, 'utf-8');
      } else {
        // 1. Directory based index.html: dist/path/index.html (e.g. dist/products/liquid-nitrogen/index.html)
        const targetDir = path.join(distDir, route.replace(/^\//, ''));
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');

        // 2. Clean URL fallback: dist/path.html (e.g. dist/products/liquid-nitrogen.html)
        const cleanHtmlPath = path.join(distDir, `${route.replace(/^\//, '')}.html`);
        const parentDir = path.dirname(cleanHtmlPath);
        if (!fs.existsSync(parentDir)) {
          fs.mkdirSync(parentDir, { recursive: true });
        }
        fs.writeFileSync(cleanHtmlPath, html, 'utf-8');
      }

      renderedCount++;
    } catch (err) {
      console.error(`Failed to pre-render route ${route}:`, err);
      errorCount++;
    }
  }

  console.log(`Pre-rendering completed: ${renderedCount} routes pre-rendered successfully (${errorCount} errors).`);
}

runPrerender().catch(err => {
  console.error('Pre-render process encountered an unhandled exception:', err);
  process.exit(1);
});
