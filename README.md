# Guty.dev — Portfolio

A personal portfolio website for **Gustavo S. Melo** featuring two unique interfaces: a modern graphical website and an interactive terminal emulator.

## Features

- **Dual Interface** — Switch between a visually rich GUI portfolio and a terminal-style portfolio at `/terminal`
- **Animated Hero** — Typing effect cycling through roles (Fullstack Engineer, Web Developer, Prompt Engineer, etc.)
- **Technology Slider** — Infinite looping carousel of technologies
- **Coffee Spill Animation** — Scroll-triggered coffee spill transition between sections
- **Project Cards** — Grid layout showcasing company and personal projects with tech stacks
- **Experience Roadmap** — Timeline-style section with work experience and technologies used
- **Contact Modal** — Quick access to WhatsApp, Gmail, GitHub, and LinkedIn
- **Terminal Mode** — Interactive terminal with commands like `help`, `about`, `personal`, `education`, `experience`, `socialmedia`, `contact`, and `gui`
- **i18n Ready** — Language context support for multilingual content
- **Theme Support** — Theme context for light/dark mode switching
- **Resume Download** — CV available in PDF and DOCX formats

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| Animations | GSAP |
| Icons | React Icons |
| Styling | CSS Modules |

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Technologies/
│   ├── CoffeeSpill/
│   ├── Projects/
│   ├── Experience/
│   ├── Review/
│   ├── Footer/
│   ├── ContactModal/
│   └── terminal/
│       ├── ascName/
│       └── commands/
│           ├── content/
│           │   ├── about.tsx
│           │   ├── education.tsx
│           │   ├── experience.tsx
│           │   ├── socialmedia.tsx
│           │   ├── personal.tsx
│           │   ├── gui.tsx
│           │   ├── contact.tsx
│           │   ├── help/
│           │   └── errors.tsx
│           └── exports.tsx
├── views/
│   ├── Website.tsx
│   ├── Terminal.tsx
│   └── NotFound.tsx
├── global/
│   ├── context/
│   │   ├── theme.context.ts
│   │   └── language.context.ts
│   └── enum/
│       └── langs.enum.ts
├── hooks/
│   └── useInView.ts
├── helper/
│   └── convertStringToCommandBin.ts
├── styles/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 24+ (see `.nvmrc`)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Design System

| Token | Value |
|---|---|
| Background | `#F3E8DF` |
| Aux Background | `#E8D1C5` |
| Shadow | `#57595B` |
| Accent | `#452829` |
| Accent 2 | `#DD9E59` |
| Font | Rubik (400, 500, 700, 900) |
| Content Width | 80% centered |

## Routes

| Path | View |
|---|---|
| `/` | Website (GUI) |
| `/website` | Website (GUI) |
| `/terminal` | Terminal interface |
| `*` | 404 Not Found |

## License

This project is private and not open for redistribution.