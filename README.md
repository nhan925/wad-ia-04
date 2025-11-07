# Tic-Tac-Toe Game 🎮

An interactive, feature-rich Tic-Tac-Toe game built with React, TypeScript, and Vite. This project showcases modern web development practices with a clean UI, theme switching, and game history management.

## ✨ Features

- **🎯 Classic Gameplay**: Play the traditional Tic-Tac-Toe game with X and O players
- **📜 Move History**: Track all moves with row/column coordinates
- **⏮️ Time Travel**: Jump back to any previous move in the game
- **🔄 Sort Controls**: Toggle between ascending and descending move history order
- **🔁 Reset Game**: Start a fresh game anytime with one click
- **🌓 Theme Toggle**: Switch between light and dark modes with persistent preference
- **🎨 Modern UI**: Beautiful glassmorphism design with smooth animations
- **📱 Responsive**: Works seamlessly on desktop and mobile devices
- **♿ Accessible**: Proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality UI components
- **Custom Hooks** - Reusable state management logic

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nhan925/wad-ia-04.git
cd wad-ia-04
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── board.tsx          # Game board component
│   ├── game.tsx           # Main game component
│   ├── square.tsx         # Individual square component
│   ├── theme-toggle.tsx   # Theme toggle button
│   └── ui/                # Reusable UI components
│       ├── alert.tsx
│       └── button.tsx
├── hooks/
│   ├── index.ts           # Hook exports
│   ├── useGameState.ts    # Game state management hook
│   └── useTheme.ts        # Theme management hook
├── utils/
│   └── calculateWinner.ts # Game logic utilities
├── lib/
│   └── utils.ts           # Helper utilities
├── App.tsx                # Root component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🎮 How to Play

1. **Make a Move**: Click on any empty square to place your mark (X or O)
2. **View History**: See all moves in the history panel on the right
3. **Time Travel**: Click on any move in the history to jump back to that state
4. **Sort History**: Use the sort button to reverse the move order
5. **Reset Game**: Click the reset button to start over
6. **Toggle Theme**: Click the sun/moon icon in the top-right to switch themes

## 🎨 Theme System

The application includes a fully functional theme system:
- **Light Mode**: Bright gradient background (teal to orange)
- **Dark Mode**: Dark gradient background (slate tones)
- **Persistent**: Theme preference is saved to localStorage
- **System Aware**: Defaults to system preference on first visit

## 🧩 Key Components

### Custom Hooks

- **`useGameState`**: Manages game state including:
  - Move history with coordinates
  - Current move tracking
  - Time travel functionality
  - Sort order management
  - Game reset logic

- **`useTheme`**: Handles theme switching:
  - Light/dark mode toggle
  - localStorage persistence
  - System preference detection

### UI Components

- **Board**: Renders the 3x3 game grid
- **Square**: Individual clickable squares with hover effects
- **Game**: Main game orchestrator
- **ThemeToggle**: Fixed position theme switcher

## 🌐 Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make your game available at `https://nhan925.github.io/wad-ia-04`

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `components.json` - shadcn/ui configuration

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**nhan925**

## 🙏 Acknowledgments

- Built as part of WAD (Web Application Development) course - Individual Assignment 04
- HCMUS (Ho Chi Minh University of Science)
- Inspired by the React tutorial with modern enhancements
