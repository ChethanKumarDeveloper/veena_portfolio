# Veena K R — Portfolio Website

A single-page portfolio built with plain HTML, CSS, and JavaScript — no
frameworks, no build step. Ready to host directly on GitHub Pages.

## Files

```
index.html      Page structure and content
style.css       All styling (design tokens at the top of the file)
script.js       Mobile nav toggle, hero signal animation, footer year
assets/
  Veena_KR_Resume.pdf   The file served by the "Download Résumé" button
```

## Before you publish

1. **Add your photo.** Open `index.html`, find the `hero-photo-frame` div, and
   replace the placeholder `<div class="hero-photo-placeholder">` with:
   ```html
   <img src="assets/your-photo.jpg" alt="Veena K R">
   ```
   Drop your photo file into the `assets/` folder first.

2. **Update the résumé file.** Replace `assets/Veena_KR_Resume.pdf` with your
   latest résumé, keeping the same filename (or update the `href` in the
   "Download Résumé" button in `index.html` if you rename it).

3. **Double-check your contact details** in the Contact section of
   `index.html` (email, phone, LinkedIn).

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g. `veena-portfolio`).
2. Push these files to the repository root (or to a `docs/` folder — your choice):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/veena-portfolio.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. After a minute, your site will be live at:
   ```
   https://<your-username>.github.io/veena-portfolio/
   ```

## Customizing

- **Colors / fonts:** all defined as CSS variables at the top of `style.css`
  under `:root`.
- **Sections:** each section in `index.html` is wrapped in `<section class="section" id="...">`
  — copy/edit the pattern to add or remove sections.
- **Skill tags, project tags, certifications:** plain HTML lists — add or
  remove `<span class="tag">` / `<div class="cert-item">` blocks as needed.
