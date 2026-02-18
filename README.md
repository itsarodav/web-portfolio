# 💼 Web Portfolio

A personal portfolio website built with modern web technologies, featuring a clean design with dark/light mode support, smooth animations, and a multi-page architecture powered by Vite.

## 👩‍💻 Technologies

- TypeScript
- Tailwind CSS v4
- Vite
- GSAP
- HTML5

## 🚀 Features

- Dark and light mode with system preference detection
- Smooth page transitions and scroll-based animations powered by GSAP
- Multi-page architecture with shared partials (header, footer, contact)
- Fully responsive design across all breakpoints
- Semantic HTML with utility-first styling

## 🎛️ The Process

I built this portfolio to have a personal space that reflects both my technical skills and design taste. The architecture uses a multi-page setup with Vite, where each page (`index`, `about`, `resume`) has its own TypeScript entry point, keeping the codebase modular and maintainable.

Shared UI components like the header, footer, and contact section live as HTML partials that get dynamically loaded via JavaScript — avoiding duplication while staying close to the platform without heavy frameworks.

The visual language relies on a consistent zinc color ramp with carefully crafted card components, making the dark/light mode transition feel cohesive rather than an afterthought.

## 📚 What I Learned

Working on this project deepened my understanding of **TypeScript** beyond basic type annotations. I used it to manage DOM interactions safely — typing event listeners, handling nullable elements with proper guards, and structuring module entry points per page. It forced me to think about the shape of data flowing through the UI, even in a project without a framework.

**Tailwind CSS v4** was another major learning curve. Building a full design system using only utility classes taught me how to think in constraints: spacing scales, color ramps, responsive breakpoints. I learned to compose complex layouts (like nested card grids with consistent borders and padding across themes) without writing a single line of custom CSS. The dark mode variant system (`dark:`) became second nature, and I gained a deep appreciation for how utility-first CSS eliminates specificity wars and dead code.

The combination of both pushed me to write **cleaner, more intentional code** TypeScript caught mistakes at build time that would have been silent runtime bugs, and Tailwind's utility model made me deliberate about every visual decision rather than hiding behind generic class names.

## ⏯️ Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/arodav/web-portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`
