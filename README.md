# NOM-FE

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Yarn** - Package manager

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   └── index.ts
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   └── index.ts
├── utils/              # Utility functions
│   ├── formatDate.ts
│   ├── validateEmail.ts
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── styles/             # Global styles
│   └── globals.css
├── assets/             # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

### Development

Start the development server:

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
yarn build
```

### Preview

Preview the production build:

```bash
yarn preview
```

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. You can:

- Use utility classes directly in components
- Create custom components in `src/components/`
- Add global styles in `src/styles/globals.css`
- Extend Tailwind configuration in `tailwind.config.js`

## 📦 Components

The project includes some basic components to get you started:

- **Button** - Reusable button component with variants
- **Card** - Card container component

## 🔧 Custom Hooks

- **useLocalStorage** - Persist state in localStorage
- **useDebounce** - Debounce values for performance

## 📄 License

This project is licensed under the MIT License.