# MailHub

A simple, fast and private email client for developers built with vanilla JavaScript, HTML, and CSS.

## Features

- **Authentication System**: Login and registration with form validation
- **Message Management**: View, organize, and manage email messages
- **Message Categories**: 
  - Inbox for new messages
  - Bookmarked messages
  - Favorite messages  
  - Trash for deleted messages
- **Search Functionality**: Real-time search through messages by subject or content
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive UI**: Bootstrap-powered interface with smooth transitions

## Project Structure

```
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── app.css           # Custom styles
│   ├── images/
│   │   ├── logo.png          # Application logo
│   │   └── mailhub.ico       # Favicon
│   └── js/
│       ├── app.js            # Main application logic
│       ├── data/
│       │   ├── index.js      # Data initialization
│       │   └── messages.js   # Sample message data
│       ├── helpers/
│       │   ├── DOMHelper.js      # DOM manipulation utilities
│       │   ├── formHelpers.js    # Form validation helpers
│       │   ├── MessageActions.js # Message action handlers
│       │   └── SearchHelper.js   # Search functionality
│       └── services/
│           ├── authService.js    # Authentication service
│           ├── messageService.js # Message management service
│           └── viewService.js    # UI state management
└── components/
    └── message.html          # Message component template
```

## Getting Started

1. **Clone or download** the project files
2. **Open** [`index.html`](index.html) in a web browser
3. **Register** a new account or **login** with any email/password combination

## How to Use

### Authentication
- Click "Login" or "Register" from the welcome screen
- Fill in the required fields (email, password, and name for registration)
- Form validation ensures proper email format and password requirements

### Managing Messages
- **View Messages**: Navigate between Inbox, Bookmarked, Favourites, and Trash tabs
- **Bookmark Messages**: Click the star icon next to any message
- **Mark as Favorite**: Select messages and click the star button in the toolbar
- **Delete Messages**: Select messages and click the trash button in the toolbar
- **Search**: Use the search bar to find messages by subject or content

### Message Organization
- **Inbox**: Shows all unorganized messages
- **Bookmarked**: Messages you've bookmarked for quick access
- **Favourites**: Important messages marked as favorites
- **Trash**: Deleted messages

## Technical Details

### Core Classes

- **[`AuthService`](assets/js/services/authService.js)**: Handles user authentication
- **[`MessageService`](assets/js/services/messageService.js)**: Manages message operations
- **[`ViewService`](assets/js/services/viewService.js)**: Controls UI state and visibility
- **[`DOMHelper`](assets/js/helpers/DOMHelper.js)**: Utility functions for DOM manipulation
- **[`SearchHelper`](assets/js/helpers/SearchHelper.js)**: Implements search functionality
- **[`MessageActions`](assets/js/helpers/MessageActions.js)**: Handles bulk message operations

### Form Validation

The application includes comprehensive form validation with helpers in [`formHelpers.js`](assets/js/helpers/formHelpers.js):
- Email format validation
- Password strength requirements (uppercase, lowercase, number)
- Full name validation
- Real-time error display

### Dependencies

- **Bootstrap 5.3.3**: UI framework for responsive design
- **Bootstrap Icons**: Icon library
- **Google Fonts**: Work Sans font family

## Browser Compatibility

This application works in all modern browsers that support:
- ES6 Classes
- Arrow functions
- Template literals