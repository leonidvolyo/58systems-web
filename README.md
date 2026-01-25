# 58 Systems Website

A clean, minimalistic one-page website for 58 Systems — an automation and integration partner for SMBs.

## Tech Stack

- React 19
- Tailwind CSS
- Lucide React Icons

## Local Development

```bash
cd frontend
npm install
npm start
```

The site will be available at `http://localhost:3000`

---

## Deploy to GitHub Pages

### Quick Deploy (5 minutes)

#### Step 1: Install gh-pages

```bash
cd frontend
npm install gh-pages --save-dev
```

#### Step 2: Update package.json

Add the `homepage` field and deploy scripts to `frontend/package.json`:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

**Replace:**
- `YOUR_GITHUB_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

**Example:**
```json
"homepage": "https://58systems.github.io/website"
```

#### Step 3: Initialize Git & Push to GitHub

```bash
# From project root
git init
git add .
git commit -m "Initial commit - 58 Systems website"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Step 4: Deploy

```bash
cd frontend
npm run deploy
```

This will:
1. Build the production version
2. Push it to a `gh-pages` branch
3. GitHub will automatically serve it

#### Step 5: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `gh-pages` branch
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Alternative: Deploy to GitLab Pages

#### Step 1: Create `.gitlab-ci.yml` in project root

```yaml
image: node:18

pages:
  stage: deploy
  cache:
    paths:
      - frontend/node_modules/
  script:
    - cd frontend
    - npm install
    - npm run build
    - mv build ../public
  artifacts:
    paths:
      - public
  only:
    - main
```

#### Step 2: Update homepage in package.json

```json
"homepage": "https://YOUR_USERNAME.gitlab.io/YOUR_REPO_NAME"
```

#### Step 3: Push to GitLab

```bash
git push origin main
```

GitLab CI will automatically build and deploy.

---

## Custom Domain (Optional)

### For GitHub Pages:

1. Add a `CNAME` file in `frontend/public/` with your domain:
   ```
   www.58systems.com
   ```

2. Update `homepage` in package.json:
   ```json
   "homepage": "https://www.58systems.com"
   ```

3. Configure DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

4. In GitHub repo Settings → Pages, add your custom domain

---

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Problems.jsx
│   │   ├── Solutions.jsx
│   │   ├── Examples.jsx
│   │   ├── WhyUs.jsx
│   │   ├── AuditDeliverables.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── mock.js          # All website content
│   ├── App.js
│   ├── App.css
│   └── index.css            # Tailwind + custom styles
├── package.json
└── tailwind.config.js
```

## Customization

All website text content is in `src/data/mock.js` — edit this file to update copy.

## License

© 2025 58 Systems. All rights reserved.
