# THE TNEVE EVENT — Digital Experience & Exploration Platform

Welcome to the digital home of **The TNEVE Event** (est. 2009). This platform has been designed to transition traditional event operations into a sophisticated, mobile-first, urban-discovery discovery web application for Mumbai's explorers.

Built precisely according to the **2026 digital briefing, Brand Kit specifications, and content templates**!

---

## 🎨 Architectural & Design Decisions

1. **Cinematic Dark Mode (Default Canvas)**: Deep black background (`#000000`) and pure white text (`#FFFFFF`) to ensure extreme legibility, OLED battery efficiency for active on-the-go users, and a sleek, immersive night-out vibe.
2. **Dynamic Bento Grid**: High-contrast, interactive category dashboard (Walks, Hunts, Social, Corporate) representing modern 2026 grid layout standards.
3. **The "Pastel Shift"**: A complete aesthetic pivot applied automatically to the **Corporate** and **About** pages, shifting the dark grit into neomorphic, soft pastel organic layouts. This creates a friendly B2B transition without compromising core engagement values.
4. **Liquid Glass Cards**: Smooth glassmorphism backing (`backdrop-filter`) and dynamic shadow depths that react fluidly as users scroll and inspect event items.
5. **Mobile-First Bottom Reach Zones**: Pinned navigation toggle, dual explore actions, and fixed booking CTAs placed specifically in the thumb-reachable zone to cater to users navigating city streets.
6. **WhatsApp Ticketing Integration**: Translucent glassmorphic tickets confirming coordinates instantly and generating dynamic, customized pre-filled WhatsApp links for final booking conversions.

---

## 📂 Core Project Repository Files

* `index.html` - Semantic markup containing all page layouts, modal structures, and Search Engine Optimized (SEO) meta details.
* `style.css` - Custom styling tokens, variable configurations, animations, responsive breakpoints, and neomorphic Pastel Shift triggers.
* `app.js` - Logic controller managing tab transitions, dynamic category filtering, interactive modal injections, ripple animation coordinates, and ticket generation.
* `assets/` - Grainy high-contrast background assets and soft organic neomorphic B2B textures.

---

## 🚀 How to Host This on the Cloud (Free GitHub Pages Deployment)

GitHub Pages allows you to host this static website on the cloud in under a minute for free. Follow these step-by-step instructions:

### Step 1: Initialize Git Locally
If you have Git installed, open your terminal (PowerShell, Command Prompt, or Git Bash) in the project directory (`C:\Users\naman\.gemini\antigravity\scratch\premium-portfolio`) and run:
```bash
# Initialize a new Git repository
git init

# Add all files to the repository
git add .

# Create the initial commit
git commit -m "feat: initial commit of the premium TNEVE digital platform"

# Set the default branch name to main
git branch -M main
```

### Step 2: Create a Repository on GitHub
1. Go to your web browser and open [GitHub](https://github.com). (Log in or create a free account).
2. Click the green **"New"** button in the top left to create a new repository.
3. Name your repository: `premium-portfolio` (or `tneve-experiences`).
4. Keep the repository **Public** (required for free hosting).
5. Leave "Add a README", ".gitignore", and "Choose a license" **UNCHECKED** (since we already have our files).
6. Click the green **"Create repository"** button.

### Step 3: Link Your Local Code and Push to GitHub
On the next page that appears, look for the section titled **"…or push an existing repository from the command line"**. Copy and paste those commands into your terminal:
```bash
# Link your local folder to GitHub (replace with your exact GitHub URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/premium-portfolio.git

# Push your files to the cloud
git push -u origin main
```

### Step 4: Turn on GitHub Pages (Site Goes Live!)
1. Go to your repository page on the GitHub website.
2. Click on the **Settings** tab (represented by a gear icon at the top of the repository page).
3. In the left navigation menu, under the "Code and automation" section, click on **Pages**.
4. Under the **"Build and deployment"** section:
   * Source: Select **"Deploy from a branch"**.
   * Branch: Click the dropdown and select **`main`** and **`/ (root)`**.
5. Click **Save**.
6. Wait 30 seconds, refresh the page, and GitHub will display a message at the top of the screen: 
   > **"Your site is live at: https://YOUR_GITHUB_USERNAME.github.io/premium-portfolio/"**

Your TNEVE digital experience platform is now live globally on the cloud! 🚀
