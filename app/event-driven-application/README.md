# Event-Driven Chat Application

A real-time chat application built with TypeScript, featuring an event-driven architecture with Web Workers for content filtering, Socket.io for real-time communication, and a component-based UI system.

## 🚀 Features

- **Real-time messaging** with Socket.io
- **Multi-room chat** support
- **User authentication** with automatic registration
- **Bad word filtering** using Web Workers
- **Event-driven architecture** with custom event management
- **Component-based UI** system
- **Persistent storage** with JSON Server
- **Responsive design** with CSS custom properties

## 🏗️ Architecture

### Core Components

- **EventManager**: Central event system for application-wide communication
- **ChatManager**: Handles chat functionality, room management, and message handling
- **NotificationManager**: Manages application notifications with decorators
- **SocketService**: Real-time communication layer
- **Component System**: Reusable UI components with automatic event binding

### Services

- **AuthService**: User authentication and session management
- **MessageService**: Message CRUD operations
- **RoomService**: Chat room management
- **UserService**: User management
- **BaseApiService**: HTTP client wrapper with error handling

## 📁 Project Structure

```
src/
├── scripts/
│   ├── core/               # Core application logic
│   │   ├── chatManager.ts
│   │   ├── eventManager.ts
│   │   └── notificationManager.ts
│   ├── services/           # API and business logic services
│   │   ├── auth.service.ts
│   │   ├── message.service.ts
│   │   ├── room.service.ts
│   │   └── socket.service.ts
│   ├── ui/                 # UI components
│   │   ├── base/           # Base component classes
│   │   ├── features/       # Feature-specific components
│   │   └── layout/         # Layout components
│   ├── models/             # TypeScript interfaces and types
│   ├── utils/              # Utility functions and decorators
│   └── workers/            # Web Workers
├── styles/                 # CSS stylesheets
└── index.html             # Entry point
```

## 🛠️ Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Socket.io** - Real-time bidirectional communication
- **Parcel** - Fast, zero-configuration build tool
- **JSON Server** - REST API mock server
- **Axios** - HTTP client library
- **UUID** - Unique identifier generation
- **Web Workers** - Background processing for content filtering

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marned22/rhino-academy-season-2/tree/ts-class/event-driven-app
cd event-driven-application
```

2. Install dependencies:
```bash
npm install
```

3. Start the development environment:
```bash
npm run dev:server
```

This command concurrently starts:
- Socket.io server (port 3001)
- JSON Server (port 2000)
- Parcel development server (port 1234)

### Available Scripts

- `npm run dev` - Start Parcel development server
- `npm run start:socket:server` - Start Socket.io server
- `npm run start:server` - Start JSON Server
- `npm run dev:serve` - Start all services concurrently

## 🎯 Usage

### Authentication

1. Navigate to `http://localhost:1234`
2. Enter username and password
3. If user doesn't exist, they will be automatically registered

### Chat Features

- **Create Rooms**: Use the room creation form in the sidebar
- **Join Rooms**: Click on any room in the room list
- **Send Messages**: Type in the message input and press Enter or click Send
- **Leave Rooms**: Click the 'x' button next to a room name

### Content Filtering

The application automatically filters inappropriate content using a Web Worker that runs in the background, replacing bad words with asterisks.

## 🔧 Configuration

### Database Structure

The application uses JSON Server with the following entities:

- **users**: User accounts with authentication
- **rooms**: Chat rooms
- **messages**: Chat messages
- **roomUsers**: Many-to-many relationship between users and rooms

### Environment Variables

- Socket.io server: `http://localhost:3001`
- JSON Server: `http://localhost:2000`
- Development server: `http://localhost:1234`

## 🎨 Styling

The application uses CSS custom properties for theming:

```css
:root {
    --bg-color: #f8f9fa;
    --text-color: #2c3e50;
    --primary-color: #007AFF;
    --text-dark: #1a1a1a;
    --secondary-color: #f1f3f4;
    --input-bg: #ffffff;
    --button-bg: #007AFF;
    --button-color: #ffffff;
    --button-hover: #0056CC;
    --header-bg: #ffffff;
    --border-color: #e1e5e9;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.15);
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --radius: 12px;
    --radius-small: 8px;
    --sent-message-bg: linear-gradient(135deg, #007AFF 0%, #0056CC 100%);
    --received-message-bg: #f1f3f4;
    --message-input-height: 120px;
    --message-input-width: 100%;
    --send-btn-size: 56px;
}
```

## 🧩 Key Design Patterns

### Event-Driven Architecture

The application uses a centralized event system for loose coupling between components:

```typescript
// Subscribe to events
eventManager.subscribe('messageSent', (message) => {
    // Handle message
});

// Dispatch events
eventManager.dispatch('messageSent', message);
```

### Component System

All UI components extend the BaseComponent class:

```typescript
export class MyComponent extends BaseComponent {
    template(): string {
        return `<div>My Component</div>`;
    }
    
    getBindingEvents() {
        return {
            '#my-button': {
                event: 'click',
                handler: this.handleClick.bind(this)
            }
        };
    }
}
```

## 📝 API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Create user
- `GET /users?name={username}` - Find user by username

### Rooms
- `GET /rooms` - Get all rooms
- `POST /rooms` - Create room
- `DELETE /rooms/:id` - Delete room

### Messages
- `GET /messages?roomId={roomId}` - Get messages by room
- `POST /messages` - Create message

### Room Users
- `GET /roomUsers` - Get room-user relationships
- `POST /roomUsers` - Add user to room

### Common Issues

1. **Port conflicts**: Ensure ports 1234, 2000, and 3001 are available
2. **Database reset**: Delete `db/db.json` to reset the database
3. **Cache issues**: Clear `.parcel-cache` folder if builds fail

### Debugging

- Check browser console for client-side errors
- Monitor Socket.io server logs for connection issues
- Verify JSON Server is running and accessible at `http://localhost:2000`
