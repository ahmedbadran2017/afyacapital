# Afya Capital Landing Page — Shopify Deployment Guide

## Files Overview

```
shopify-theme/
  layout/theme.landing.liquid    — Custom layout (no default Shopify header/footer)
  templates/page.landing.liquid  — Full landing page content
  assets/afya-landing.css        — All styles
  assets/afya-landing.js         — Menu, smooth scroll, scroll animations
```

## Step-by-Step Deployment

### Option A: Manual Upload via Shopify Admin

1. **Go to**: Shopify Admin > Online Store > Themes
2. **Click**: Actions > Edit Code (on your active theme)
3. **Upload Assets**:
   - Go to the `Assets` folder, click "Add a new asset"
   - Upload `afya-landing.css`
   - Upload `afya-landing.js`
4. **Add Layout**:
   - Go to `Layout` folder, click "Add a new layout"
   - Name it `theme.landing`
   - Paste the contents of `layout/theme.landing.liquid`
5. **Add Template**:
   - Go to `Templates` folder, click "Add a new template"
   - Choose type: `page`, name it `landing`
   - Paste the contents of `templates/page.landing.liquid`
6. **Create the Page**:
   - Go to: Shopify Admin > Online Store > Pages
   - Click "Add page"
   - Title: "Afya Capital" (or any title)
   - Under "Theme template", select `page.landing`
   - Save and publish

### Option B: Using Shopify CLI

```bash
# Install Shopify CLI if needed
npm install -g @shopify/cli @shopify/theme

# Navigate to your theme directory
cd shopify-theme

# Push files to your Shopify store
shopify theme push --store your-store.myshopify.com
```

### Option C: Using Shopify Theme Kit

```bash
# Install Theme Kit
# macOS: brew install themekit
# Windows: choco install themekit

# Configure your store
theme configure --password=YOUR_API_PASSWORD --store=YOUR_STORE.myshopify.com --themeid=YOUR_THEME_ID

# Deploy the files
theme deploy
```

## After Deployment

- Your landing page will be available at: `https://your-store.myshopify.com/pages/landing-page-title`
- To make it your homepage, go to Online Store > Preferences > Homepage and select the page
- All images are loaded from Unsplash CDN (no local image uploads needed)

## Notes

- The landing page uses a custom layout (`theme.landing`) that bypasses your theme's default header/footer for a clean, standalone experience
- Fonts (Alexandria + Playfair Display) are loaded from Google Fonts
- The page is fully responsive (desktop, tablet, mobile)
- Contact email points to: invest@afyacapital.com
