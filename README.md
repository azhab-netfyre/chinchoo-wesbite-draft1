
# Chinchoo Shopify Theme (Cleaned)

This package is the Shopify-only theme extracted and repaired from the mixed React + Shopify codebase.

## What was fixed
1. Removed the duplicated `/shopify-theme` layer issue by making the theme root the actual repository root.
2. Kept the richer, newer Shopify theme files from the nested theme copy.
3. Added missing `locales/en.default.json` required by the layout accessibility string.
4. Added missing `main-page`, `main-collection`, `main-search`, and `main-404` sections so templates no longer reference non-existent sections.
5. Added alternate page templates to preserve the About, Brand Story, How It Works, FAQ + Contact, Lookbook, and Policies content inside Shopify.
6. Copied supporting image/logo assets into the theme `assets/` folder.
7. Simplified the project into a Shopify theme only, which is the safest route for GitHub -> Shopify integration.

## Recommended GitHub structure
Only keep these folders at the repo root:
- assets
- config
- layout
- locales
- sections
- snippets
- templates

## How to use
1. Upload or push this folder to a clean GitHub repository.
2. Connect that repo to Shopify: Online Store -> Themes -> Add theme -> Connect from GitHub.
3. In Shopify Admin create pages and assign these templates:
   - About -> `page.about`
   - Brand Story -> `page.brand-story`
   - How It Works -> `page.how-it-works`
   - FAQ -> `page.faq`
   - Lookbook -> `page.lookbook`
   - Policies -> `page.policies`
4. Add products to a collection and assign it to the homepage Featured Collection section.
5. Optionally upload your final logo in Theme Settings -> Brand Identity.

## Important note
The original Vite/React app files are intentionally not included in this cleaned package because they interfere with a proper Shopify Git integration workflow.
