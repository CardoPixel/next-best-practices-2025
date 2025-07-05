# next-best-practices-2025

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-v15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blue)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-configured-blueviolet)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-configured-orange)](https://prettier.io/)

---

## 🚀 Overview

**next-best-practices-2025** is your ultimate starting point for building modern, high-performance web applications with **Next.js v15's App Router**. This template is meticulously crafted to embody the **best practices for 2025**, focusing on **scalability, maintainability, and developer experience**. It comes pre-configured with essential tools and architectural patterns, saving you countless hours of setup and ensuring your project stands on a solid foundation.

---

## ✨ Features

- **Next.js v15 (App Router)**: Leverage the latest features and improved routing paradigm for robust applications.
- **TypeScript**: Enjoy type safety and enhanced developer tooling for more reliable code.
- **ESLint & Prettier**: Integrated for consistent code style and quality across your team.
- **Atomic Design / Component-Based Architecture**: A structured approach to building scalable UIs.
- **Environment Variables**: Secure and flexible configuration management.
- **Absolute Imports**: Clean and easy-to-manage import paths.
- **Error Handling**: Robust patterns for client-side and server-side error management.
- **Performance Optimizations**: Built-in considerations for optimal loading and responsiveness.
- **Accessibility (A11y) Focus**: Encourages building inclusive web experiences.
- **Clear Folder Structure**: An intuitive and organized project layout for easy navigation.
- **Localization**: Using next-intl for best developer experience in production.

---

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling (Example)**: TailCSS / CSS Modules (or similar, depending on your choice)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)

---

## ⚡ Getting Started

Follow these steps to get your project up and running:

### 1. Clone the repository

```bash
git clone [https://github.com/CardoPixel/next-best-practices-2025.git](https://github.com/CardoPixel/next-best-practices-2025.git)
cd next-best-practices-2025
```

### 2. Install dependencies

Using npm:
Bash

npm install

Or using yarn:
Bash

yarn install

### 3. Set up environment variables

Create a .env.local file in the root of your project based on .env.example.
Code snippet

#### .env.local example

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Run the development server

```bash
npm run dev
```

or

```bash
bun dev
```

Open <http://localhost:3000> with your browser to see the result.

## 📁 Project Structure

```bash
next-best-practices-2025/
├── public/                 # Static assets (images, fonts, etc.)
├── app/                    # Next.js App Router (pages, layouts, loading, error, etc.)
│   ├── (auth)/             # Example of a route group for authentication
│   ├── api/                # API routes
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components (atoms, molecules, organisms, templates)
│   ├── ui/                 # Generic UI components (buttons, inputs)
│   └── shared/             # Components used across multiple pages
├── lib/                    # Utility functions, helper modules, data fetching
├── styles/                 # Global styles, CSS variables
├── types/                  # Global TypeScript types and interfaces
├── hooks/                  # Custom React hooks
├── .env.example            # Example environment variables
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## 📜 Scripts

```bash
    dev: Starts the development server.
    build: Builds the application for production.
    start: Starts the production server.
    lint: Runs ESLint for code quality checks.
    format: Formats code using Prettier.
    format:check: Checks for formatting issues without fixing them.
```

## 🤝 Contributing

We welcome contributions! If you have ideas for improvements or find any issues, please feel free to:

- Fork this repository.
- Create a new branch (git checkout -b feature/your-feature).
- Make your changes.
- Commit your changes (git commit -m 'feat: Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js Documentation
- TypeScript Documentation
- ESLint Documentation
- Prettier Documentation
