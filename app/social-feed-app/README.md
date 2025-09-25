# Social Feed App

A modern social media feed application built with React, TypeScript, and Vite. This application provides a comprehensive social media experience with user interactions, post management, and analytics.

## 🚀 Features

- **User Management**: User profiles and authentication with Redux persist
- **Post Creation**: Create and share posts with rich content (text, stories, media)
- **Social Interactions**: Like, comment, and share posts with filtering
- **Categories**: Dynamic navigation with Material-UI icons
- **Analytics**: Track engagement and performance metrics with data loaders
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with Material-UI and styled-components
- **Infinite Scrolling**: Optimized post loading performance
- **Protected Routes**: Authentication-based route protection system

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Material-UI, Emotion, Styled Components, Sass
- **Routing**: React Router DOM v7
- **State Management**: Redux Toolkit with RTK Query and Redux Persist
- **HTTP Client**: Axios
- **Utilities**: React-use hooks, UUID
- **Development**: ESLint, TypeScript ESLint

## 📁 Project Structure

```
src/
├── api/                     # API layer and data fetching
│   └── apiSlice.ts         # RTK Query API slice
├── app/                     # Application setup and configuration
│   ├── Root.tsx            # Root component
│   └── store.ts            # Redux store configuration with persist
├── assets/                  # Static assets
│   └── react.svg           # React logo
├── components/              # Reusable UI components
│   ├── CreatePost/         # Post creation interface with tabs
│   ├── ErrorBoundary/      # Error handling component
│   ├── Modal/              # Modal dialogs with portal
│   ├── Navigation/         # App navigation components
│   ├── Post/               # Post display and interaction components
│   ├── Sidebar/            # App sidebar navigation with dynamic icons
│   └── Users/              # User-related components
├── features/               # Redux slices and state management
│   └── userSlice.ts        # User authentication state
├── hoc/                    # Higher-Order Components
│   └── withFilterable.tsx  # HOC for filterable functionality
├── hooks/                  # Custom React hooks
│   ├── useCategories.ts    # Categories data fetching with icons mapping
│   ├── useFilter.ts        # Post filtering logic (all/friends/mine)
│   ├── useFormInput.ts     # Form input management
│   ├── useInfiniteScroll.ts # Infinite scrolling implementation
│   └── usePosts.ts         # Post management with CRUD operations
├── loginlogout/            # Authentication components
│   ├── LoginForm.tsx       # Login form with user validation
│   └── LogoutButton.tsx    # Logout button component
├── pages/                  # Application pages
│   ├── AnalyticsPage/      # Analytics page with data loader
│   ├── RootView/           # Root layout component with SCSS modules
│   ├── protectedroute/     # Route protection middleware
│   ├── ActivityPage.tsx    # Activity tracking page
│   ├── BillingPage.tsx     # Billing management page
│   ├── DashboardPage.tsx   # Main dashboard
│   ├── Feed.tsx            # Social feed page with filtering
│   ├── Feed.view.tsx       # Feed view component
│   └── ...other pages      # Additional app pages (14+ routes)
├── reducers/               # Redux reducers
│   └── FeedReducer.ts      # Post feed state management
├── routes/                 # Routing configuration
│   └── routesConfig.tsx    # Route definitions with lazy loading
├── styles/                 # Global styles and SCSS modules
│   ├── index.scss          # Global styles and resets
│   ├── main.scss           # Style imports and forwards
│   ├── mixins.scss         # SCSS mixins for common patterns
│   └── variables.scss      # SCSS variables, colors, and functions
├── types/                  # TypeScript type definitions
│   └── types.tsx           # Comprehensive application type definitions
├── App.tsx                 # Main App component with router setup
├── main.tsx                # Application entry point
└── vite-env.d.ts          # Vite environment types
```

```
public/
├── categories.json         # Navigation categories with icon mappings
└── chatUsers.json         # Mock user data for development
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marned22/rhino-academy-season-2.git
cd app/social-feed-app
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

### Login Credentials

Use any username from the [`chatUsers.json`](public/chatUsers.json) file:
- `emma_johnson`
- `liam_smith`
- `olivia_williams`
- etc.

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 🏗️ Architecture

### State Management

- **Redux Toolkit**: Modern Redux with less boilerplate
- **RTK Query**: Data fetching and caching for [`apiSlice`](src/api/apiSlice.ts)
- **Redux Persist**: Persist authentication state across browser sessions
- **Local State**: Component-level state with custom hooks like [`usePosts`](src/hooks/usePosts.ts)

### Routing

- **React Router v7**: File-based routing with lazy loading
- **Protected Routes**: Authentication middleware in [`ProtectedRoute`](src/pages/protectedroute/ProtectedRoute.tsx)
- **Error Boundaries**: Route-level error handling with [`ErrorBoundary`](src/components/ErrorBoundary/ErrorBoundary.tsx)

### Component Architecture

- **HOCs**: Higher-Order Components like [`withFilterable`](src/hoc/withFilterable.tsx)
- **Custom Hooks**: Reusable logic in [`hooks/`](src/hooks/) directory
- **View/Logic Separation**: Components split into `.tsx` and `.view.tsx` files

## 🎨 Styling

The application uses a comprehensive styling approach:
- **Material-UI**: Component library with custom theming
- **Emotion**: CSS-in-JS for styled components
- **Styled Components**: Component-based styling with theme support
- **Sass**: Enhanced CSS with variables, mixins, and functions in [`styles/`](src/styles/)

### SCSS Architecture

- [`variables.scss`](src/styles/variables.scss): Colors, spacing, typography, and utility functions
- [`mixins.scss`](src/styles/mixins.scss): Reusable style patterns
- [`main.scss`](src/styles/main.scss): Style imports and forwards
- [`index.scss`](src/styles/index.scss): Global styles and resets

## 📱 Features Overview

### Authentication System

- **Login Form**: Username-based authentication with validation
- **Protected Routes**: Automatic redirect to login for unauthenticated users
- **Persistent Sessions**: Redux Persist maintains login state
- **User Context**: Current user integration throughout the app

### Social Feed

- **Post Creation**: Multi-tab interface (Post/Story/Media) in [`CreatePost`](src/components/CreatePost/)
- **Post Filtering**: Filter by All/Friends/Mine using [`useFilter`](src/hooks/useFilter.ts)
- **Infinite Scroll**: Performance optimized loading with [`useInfiniteScroll`](src/hooks/useInfiniteScroll.ts)
- **CRUD Operations**: Full post management in [`usePosts`](src/hooks/usePosts.ts)

### Navigation & Layout

- **Dynamic Sidebar**: Category navigation with Material-UI icons from [`useCategories`](src/hooks/useCategories.ts)
- **Top Navigation**: Core app navigation with active states
- **Responsive Layout**: Three-column layout with flexible sizing

## 🔧 Development

### Code Quality

This project uses ESLint with TypeScript support:
- React Hooks linting
- React Refresh integration  
- TypeScript strict mode
- Custom rules for better code practices

### TypeScript Configuration

- [`tsconfig.app.json`](tsconfig.app.json): Application code configuration
- [`tsconfig.node.json`](tsconfig.node.json): Node.js/Vite configuration
- [`tsconfig.json`](tsconfig.json): Project references configuration

### Performance Optimizations

- Lazy loading with React Router
- Infinite scrolling for large datasets
- Redux state persistence
- Component memoization patterns
- Optimized bundle splitting

## 🧪 Testing & Quality

### Type Safety
- Comprehensive type definitions in [`types.tsx`](src/types/types.tsx)
- Strict TypeScript configuration
- Interface-driven development

### Error Handling
- Route-level error boundaries
- Graceful fallbacks for data loading
- User-friendly error messages

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**: Vite automatically finds the next available port
2. **Module not found**: Run `npm install` to ensure all dependencies are installed  
3. **TypeScript errors**: Check type definitions in [`types.tsx`](src/types/types.tsx)
4. **Login issues**: Use usernames from [`chatUsers.json`](public/chatUsers.json)
5. **Style issues**: Check SCSS compilation and variable imports

### Performance Tips

- Use React.memo for expensive components
- Implement proper error boundaries
- Optimize images and assets
- Use code splitting for large components
- Monitor Redux DevTools for state management

## 📄 License

This project is private and not licensed for public use.
