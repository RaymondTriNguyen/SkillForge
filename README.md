# SkillForge - Interactive Learning Platform

SkillForge is a modern, production-ready web application for learning technical skills through short AI-generated lessons. Built with React, TypeScript, and TailwindCSS.

## Features

- **Interactive Learning**: Browse and learn from curated technical skills
- **Multiple Categories**: Programming, Cloud, DevOps, Data Science, Design, and Security
- **Progress Tracking**: Automatic progress saving using local storage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Search & Filter**: Quickly find skills by keyword or category
- **Lesson Viewer**: Rich lesson content with markdown rendering
- **AI Mock Integration**: Placeholder for future AI-generated lesson features

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS
- **Lucide React** - Icon library
- **Local Storage API** - Progress persistence

## Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Badge.tsx       # Category and difficulty badges
│   ├── Button.tsx      # Button component with variants
│   ├── Card.tsx        # Card container component
│   ├── Navigation.tsx  # Top navigation bar
│   ├── ProgressBar.tsx # Progress indicator
│   └── SearchBar.tsx   # Search input component
├── pages/              # Page components
│   ├── LandingPage.tsx    # Home page with hero and features
│   ├── ExplorerPage.tsx   # Skill browser with search/filter
│   └── LessonViewerPage.tsx # Lesson content viewer
├── data/               # Static data and content
│   └── skills.ts       # Skill definitions and lesson content
├── types/              # TypeScript type definitions
│   └── index.ts        # Core types (Skill, Lesson, etc.)
├── utils/              # Utility functions
│   └── storage.ts      # Local storage helpers
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and animations
```

## Key Features Explained

### Landing Page

- Hero section with value proposition
- Feature highlights
- Category overview
- User testimonials
- Call-to-action sections

### Lesson Explorer

- Real-time search across all skills
- Category filtering
- Difficulty badges (Beginner, Intermediate, Advanced)
- Progress indicators for each skill
- Responsive card grid layout

### Lesson Viewer

- Side navigation with lesson outline
- Progress tracking per lesson
- Markdown-style content rendering
- Code block formatting
- Mark as complete functionality
- Mock AI lesson generation

### Progress Tracking

User progress is automatically saved to browser local storage:
- Completed lessons
- Skill progress percentages
- Current lesson position

To clear progress, use browser developer tools to clear local storage or call:
```javascript
localStorage.removeItem('skillforge_progress')
```

## Customization

### Adding New Skills

Edit `src/data/skills.ts` to add new skills:

```typescript
{
  id: 'my-new-skill',
  title: 'My New Skill',
  description: 'Description here',
  category: 'programming',
  difficulty: 'beginner',
  duration: '2 hours',
  icon: 'Code', // Lucide icon name
  lessons: [
    {
      id: 'lesson-1',
      title: 'Lesson Title',
      content: 'Markdown content here',
      order: 1,
    }
  ]
}
```

### Styling

The application uses TailwindCSS. Modify `tailwind.config.js` to customize:
- Colors
- Spacing
- Typography
- Breakpoints

### Animations

Custom animations are defined in `src/index.css`:
- `animate-fade-in` - Fade in with slide up
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Real AI lesson generation using GPT API
- User authentication and cloud sync
- Quiz and assessment features
- Certificates and achievements
- Social features (share progress, comments)
- Video and interactive code playground
- Offline mode with service workers

## License

MIT License - feel free to use this project for learning or as a foundation for your own applications.

## Contributing

This is a demonstration project. Feel free to fork and customize for your needs.

---

Built with React, TypeScript, and TailwindCSS
