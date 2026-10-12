import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import chatHandler from './api/chat';
import contactHandler from './api/contact';
import statusHandler from './api/status';
import { renderRouteHtml, URL_REDIRECTS, normalizePath } from './services/seoPrerender';
import { getTelegramDiagnostics, sendTelegramNotification } from './services/telegramService';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(cors());
app.use(express.json());

// Public static assets (sitemap.xml, robots.txt, icons, logo)
app.use(express.static(path.join(process.cwd(), 'public')));

// Health check endpoint
app.get('/api/health', async (req, res) => {
  const telegramStatus = await getTelegramDiagnostics();
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    telegram: telegramStatus,
  });
});

// Telegram diagnostics endpoint
// Telegram diagnostics & health endpoints
app.all('/api/status', statusHandler);
app.get('/api/health', statusHandler);
app.get('/api/telegram/status', statusHandler);

// Website Contact Form & RFQ notification dispatcher (shared with Vercel)
app.all('/api/contact', contactHandler);

// Serverless handler for /api/chat (shared with Vercel)
app.all('/api/chat', chatHandler);

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    // SSR / Pre-rendering route handler for development
    app.use(async (req, res, next) => {
      if ((req.method !== 'GET' && req.method !== 'HEAD') || req.path.startsWith('/api') || path.extname(req.path)) {
        return next();
      }

      try {
        const cleanPath = normalizePath(req.path);
        if (URL_REDIRECTS[cleanPath]) {
          return res.redirect(301, URL_REDIRECTS[cleanPath]);
        }

        const url = req.originalUrl;
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const { status, html, seo } = renderRouteHtml(url, template);

        if (seo.status === 301 && seo.redirectTo) {
          return res.redirect(301, seo.redirectTo);
        }

        res.status(status).set({ 'Content-Type': 'text/html' });
        if (req.method === 'HEAD') {
          return res.end();
        }
        return res.end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Serve production static assets (disable serving default index.html so SSR handler executes)
    app.use(express.static(distPath, { index: false }));

    // SSR / Pre-rendering route handler for production
    app.use(async (req, res, next) => {
      if ((req.method !== 'GET' && req.method !== 'HEAD') || req.path.startsWith('/api') || path.extname(req.path)) {
        return next();
      }

      try {
        const cleanPath = normalizePath(req.path);
        if (URL_REDIRECTS[cleanPath]) {
          return res.redirect(301, URL_REDIRECTS[cleanPath]);
        }

        const url = req.originalUrl;
        const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
        const { status, html, seo } = renderRouteHtml(url, template);

        if (seo.status === 301 && seo.redirectTo) {
          return res.redirect(301, seo.redirectTo);
        }

        res.status(status).set({ 'Content-Type': 'text/html' });
        if (req.method === 'HEAD') {
          return res.end();
        }
        return res.end(html);
      } catch (e) {
        next(e);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
