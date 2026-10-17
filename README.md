# Shashang Dhoriyani - Aviation Technology & Digital Transformation Portfolio

A bespoke, artistic, doodle-style personal portfolio and professional resume website designed specifically for **Shashang Dhoriyani**, Assistant Manager – Information Technology at Ahmedabad International Airport Limited.

---

## 🎨 Design Philosophy: Wholly Artistic & Free-Form Doodles

Unlike standard corporate dashboard templates or sterile generic resumes, this website is styled as an **engineering field journal & creative sketchbook**:
- **Tactile Paper Texture & Dot Grid:** Subtle warm sketchbook backdrop.
- **Hand-Drawn Free-Form Borders:** Wobbly organic borders (`border-radius: 255px 15px 225px 15px...`) and sketch shadows (`box-shadow: 3px 4px 0px #181d26`).
- **Aviation Doodles & Visuals:** Live animated airport radar display, paper airplanes, flight-path dashed trails, and washi-tape decorations.
- **Interactive Cursor Doodle Trail:** An interactive HTML5 canvas trails delicate doodle ink and stars as you move your mouse (with a one-click toggle to turn on/off).
- **Sticky Note Ideas Board:** Playful, slightly rotated sticky notes with washi-tape clips displaying the *"Ideas I Explore"* section.
- **High-End & Current Demanding Skills:** AI Video Analytics (Computer Vision), APOC Command Centre, DigiYatra Biometrics, Self-Baggage Drop, Power Automate, and SAP-supported IT Finance.

---

## 📂 Project Architecture

```
Portfolio/
├── index.html        # Main interactive portfolio SPA with SEO & Schema.org metadata
├── resume.html       # Standalone, 1-click printable & ATS-compliant resume
├── data.js           # Centralized, reusable data structure (easy to edit & extend)
├── styles.css        # Bespoke doodle aesthetic, sketch animations & print styles
├── app.js            # Reactive filtering, case-study modal, doodle canvas & forms
└── README.md         # Deployment & customization guide
```

---

## 🚀 How to Preview Locally (Zero Setup Needed)

Because this website uses modern, browser-native ES modules and CDN dependencies:
1. Open your file explorer and navigate to `d:\OneDrive - Adani\Antigravity\Portfolio`.
2. Double-click **`index.html`** or **`resume.html`**.
3. It will open instantly in Chrome, Edge, Firefox, or Safari with full animations, filtering, and styling—**no Node.js, npm, or local web server required!**

---

## ☁️ 100% Free & Zero-Maintenance Hosting Options

This site is statically generated and incurs **$0 in hosting costs**. Here are the three best modern deployment choices:

### Option 1: GitHub Pages (Recommended)
1. Initialize a git repository and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial release of portfolio website"
   git branch -M main
   ```
2. Create a repository on GitHub (e.g., `ShashangDhoriyani.github.io` or `portfolio`).
3. Push to your repository:
   ```bash
   git remote add origin https://github.com/ShashangDhoriyani/portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages > Branch** and select `main` / `root`.
5. Your portfolio is live globally with a free SSL certificate!

### Option 2: Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Select **Upload Assets** (or connect your GitHub repository).
3. Drag and drop the `Portfolio` directory.
4. Your site is deployed on Cloudflare’s global edge network for free with instant caching.

### Option 3: Netlify Drop / Vercel
1. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `Portfolio` folder.
3. Your site is live immediately with a free `.netlify.app` domain or custom domain.

---

## ✏️ How to Update Content (Without Touching HTML)

All content is cleanly separated in **`data.js`**:
- **Personal Info & Links:** Update `PORTFOLIO_DATA.personal` (LinkedIn, email, GitHub).
- **Projects & Case Studies:** Add or modify items in `PORTFOLIO_DATA.projects`.
- **Career Chapters:** Update `PORTFOLIO_DATA.journeyChapters`.
- **Skills Matrix:** Update `PORTFOLIO_DATA.skills.categories`.
- **Ideas I Explore:** Update `PORTFOLIO_DATA.ideasIExplore`.

---

## 🔒 Pre-Publish Privacy & Deployment Checklist

- [x] **Custom Domain Configured:** `CNAME` created for `shashang.me`.
- [x] **Silent Contact Form Engine:** Upgraded with Web3Forms API support (silent in-background delivery) + seamless `mailto:` fallback.
- [x] **LinkedIn URL:** Connected to `https://www.linkedin.com/in/shashang-dhoriyani-0b393a1b9/` across portfolio, contact form, and resume.
- [x] **Resume Buttons:** Connected directly to `resume.html` with built-in 1-click ATS print / Save to PDF.
- [x] **GitHub Link:** Connected to `https://github.com/ShashangDhoriyani`.
- [x] **Phone Number:** Kept strictly private (only public email and contact form are exposed).
- [x] **Confidential Data:** No internal commercial amounts, employee IDs, PR/PO numbers, or internal links are present.
- [x] **Profile Photo Cropped & Ready:** Run `copy_profile_photo.bat` to place it in `assets/profile.png`.

---

## 🌐 Custom Domain Setup (`shashang.me` on Namecheap)

1. Open **Namecheap** → **Domain List** → Click **Manage** next to `shashang.me`.
2. Go to the **Advanced DNS** tab.
3. Remove existing URL Redirect records or parking records.
4. Add 4 **A Records**:
   - Host: `@` | Value: `185.199.108.153` | TTL: Automatic
   - Host: `@` | Value: `185.199.109.153` | TTL: Automatic
   - Host: `@` | Value: `185.199.110.153` | TTL: Automatic
   - Host: `@` | Value: `185.199.111.153` | TTL: Automatic
5. Add 1 **CNAME Record**:
   - Host: `www` | Value: `shashangdhoriyani.github.io.` | TTL: Automatic
6. In GitHub Repo Settings → **Pages** → under **Custom domain**, enter `shashang.me` and check **Enforce HTTPS**.

---

## ✉️ 1-Minute Silent Email Setup (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com).
2. Enter your email: `dhoriyanishashang777@gmail.com`.
3. Check your email for your free **Access Key**.
4. In `data.js`, paste your key into `web3FormsAccessKey: "YOUR_KEY_HERE"`.
5. Messages sent through the contact form will now deliver instantly into your inbox in the background!

---

## 💎 Best 100% Free Upgrades Implemented

### 1. Free Professional Email Forwarding (`contact@shashang.me`)
Namecheap includes **Free Email Forwarding** with your domain registration:
1. In Namecheap, click **Manage** next to `shashang.me`.
2. On the **Domain** tab, scroll down to the **Redirect Email** section.
3. Click **Add Forwarder**:
   - Alias: `contact` (or `hello`)
   - Forward to: `dhoriyanishashang777@gmail.com`
4. Click the checkmark to save. Any email sent to `contact@shashang.me` lands instantly in your personal Gmail inbox at zero cost forever!

### 2. PWA (Progressive Web App) Mobile Installation
- The site includes a modern `manifest.json` and aviation radar SVG icon.
- When you or an interviewer visit `shashang.me` on an iPhone (Safari → Share → **Add to Home Screen**) or Android (Chrome → **Install App / Add to Home screen**), it installs as a standalone app on your phone with no browser search bars!

### 3. High-Impact Social Share Cards & Favicon
- Linked bespoke SVG radar favicon (`assets/favicon.svg`).
- Custom 1200x630 Open Graph card (`assets/og-card.svg`) configured in meta tags so links shared on LinkedIn, WhatsApp, and Twitter display rich graphical previews.

### 4. Interactive Case-Study Navigation & Link Sharing
- While viewing any case study in the modal:
  - Press `←` (Left Arrow) or `→` (Right Arrow) to cycle between projects.
  - Press `Esc` to close.
  - Click **Share Link** to copy a direct link (`https://shashang.me/#project-aviio`) to your clipboard with 1 click.

### 5. Search Engine SEO (`sitemap.xml` & `robots.txt`)
- Pre-configured `sitemap.xml` and `robots.txt` ensure Google, Bing, LinkedIn, and Perplexity index your projects and credentials cleanly.

### 6. Free Privacy-Friendly Analytics (Optional)
- To track recruiter visits without cookie banners or slowing down your site:
  - Sign up for free at [Cloudflare Web Analytics](https://dash.cloudflare.com/) (Web Analytics section).
  - Copy the 1-line JS beacon snippet and paste it right above `</body>` in `index.html`.

---

## 📄 License & Attribution
Designed and built for **Shashang Dhoriyani**. All rights reserved.
