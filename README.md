# 🚀 Your Personal Portfolio Dashboard

A modern, data-driven personal portfolio dashboard template built with React and Tailwind CSS.

## 📸 Demo
Demo page link: [https://owenleezy.github.io/awesome-personal-portfolio/](https://owenleezy.github.io/awesome-personal-portfolio/)

## 💻 Getting Started

To use this template, ensure you have Node.js & npm installed. We recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Follow these steps to get running:

```sh
# Step 1: Clone the repository
git clone https://github.com/owenleezy/awesome-personal-portfolio.git

# Step 2: Navigate to the project directory
cd awesome-personal-portfolio

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## 🛠️ Tech Stack

This project is built using modern web technologies:

- [Vite](https://vitejs.dev/) - Fast frontend build tool
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React](https://react.dev/) - UI Library
- [shadcn-ui](https://ui.shadcn.com/) - Reusable components built with Radix UI and Tailwind
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## 📂 Project Structure

| Folder | Description |
| :--- | :--- |
| `src/content` | **JSON configuration files.** This is where you customize your resume data. |
| `public` | Static assets that are copied directly to the build folder (e.g., `favicon.ico`, `robots.txt`). |
| `dist` | **Distribution folder.** This is generated when you run `npm run build`. It contains the production-ready minified code. |
| `src/lib` | Utility functions and content loaders. |
| `src/components` | UI components built with shadcn/ui. |

## ⚙️ How to Customize

This template is fully data-driven. You don't need to touch much React code to get started. Just edit the JSON files in `src/content`:

1.  **`about.json`**: Hero section text, profile summary, and SEO metadata (page title/description).
2.  **`contact.json`**: Your email, phone, social links (LinkedIn, GitHub, etc.).
3.  **`projects.json`**: Your portfolio projects. Each project can have stats, tags, and detailed "workload" steps.
4.  **`resume.json`**: Your work experience, education, and skills.
5.  **`photo/` & `resume/`**: Drop your profile pictures and PDF resumes here.

### 🖼️ Managing Assets (Images & PDFs)

To ensure your images and resume documents display correctly both locally and after deployment, follow these path rules:

#### **Photos & Logos**
- **Location**: Store them in `src/content/photo/`.
- **JSON Reference**: Use the full path from the root, for example:
  ```json
  "logo": "/src/content/photo/your-logo.png"
  ```
- **Why?**: This allows Vite to locate the assets during development. (Note: For high-reliability production builds, you can also place images in the `public/` folder and reference them as `"/your-logo.png"`).

#### **PDF Resumes**
- **Location**: Store them in `src/content/resume/`.
- **Filename**: Keep the filenames as `resume(ch).pdf` and `resume(en).pdf` to match the imports in `Resume.tsx`.
- **Customization**: If you want to use different filenames, you'll need to update the import statements at the top of `src/pages/Resume.tsx`:
  ```typescript
  import resumeChPdf from "@/content/resume/your-new-name.pdf";
  ```

## 🚀 Deployment (GitHub Pages)

This project includes a GitHub Action to automatically deploy your site.

1.  **Fork** this repository.
2.  Go to **Settings > Pages**.
3.  Under **Build and deployment > Source**, select **GitHub Actions**.
4.  When you push to the `main` branch, it will automatically build and deploy.

> [!TIP]
> **Fixing the "White Screen" issue**: The `base` path is automatically calculated in the GitHub Action using the `VITE_BASE_PATH` environment variable. This ensures that assets are correctly loaded even if your repository is named something else.

## 🛠️ Local Build & Preview

Before deploying, you can test the production build locally to ensure everything looks correct:

```sh
# Build the project
npm run build

# Preview the built site
npm run preview
```

## 🤖 This is a vibe coding learning project,feel free to use it as a template for your own portfolio! (MIT license)
- **Lovable**: For initial UI generation.
- **Shitch**: For futher UI design.
- **Antigravity**: For advanced code development.