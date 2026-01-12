
  # Professional Portfolio Design

  This is a code bundle for Professional Portfolio Design. The original project is available at https://www.figma.com/design/SEiIVYGpJ8BXMxUI37TVZe/Professional-Portfolio-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying to GitHub Pages

  Follow these steps to deploy your portfolio to GitHub Pages:

  ### 1. Configure Vite for GitHub Pages

  Update your `vite.config.ts` to include the base URL for your repository:

  ```typescript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()],
    base: '/your-repo-name/', // Replace with your GitHub repository name
  })
  ```

  ### 2. Build the Project

  ```bash
  npm run build
  ```

  This creates a `dist` folder with your production-ready files.

  ### 3. Deploy Using GitHub Actions (Recommended)

  Create `.github/workflows/deploy.yml` in your repository:

  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches: ['main'] # or 'master'
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: '20'
        - run: npm ci
        - run: npm run build
        - uses: actions/upload-pages-artifact@v3
          with:
            path: ./dist

    deploy:
      needs: build
      runs-on: ubuntu-latest
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      steps:
        - uses: actions/deploy-pages@v4
          id: deployment
  ```

  ### 4. Enable GitHub Pages

  1. Go to your GitHub repository
  2. Navigate to **Settings** → **Pages**
  3. Under **Source**, select **GitHub Actions**
  4. Push your changes to trigger the workflow

  ### 5. Manual Deployment (Alternative)

  If you prefer manual deployment:

  ```bash
  npm install -g gh-pages

  # Build the project
  npm run build

  # Deploy to gh-pages branch
  gh-pages -d dist
  ```

  Your portfolio will be live at `https://yourusername.github.io/your-repo-name/`
  