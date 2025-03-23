# HotSpots ✨

<div align="center">
  <img src="public/logo.svg" alt="HotSpots Logo" width="200"/>
  <p>Discover the world's most exciting destinations</p>
</div>

## 🌟 Overview

HotSpots is a modern, responsive web application designed to help travelers discover and explore destinations around the world. With multilingual support (English and Arabic), intuitive UI, and interactive features, HotSpots makes planning your next adventure seamless and enjoyable.

## ✨ Features

- **Responsive Design**: Beautiful user interface optimized for all devices (mobile, tablet, desktop)
- **Multilingual Support**: Full support for English and Arabic with RTL layout
- **Dark/Light Mode**: Customizable theme preference for better readability
- **Interactive UI Components**: Engaging animations and micro-interactions
- **User Authentication**: Secure login and registration system
- **Exploration Interface**: Discover destinations with advanced filtering options
- **Destination Details**: Comprehensive information about each location

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: TailwindCSS with custom theming
- **Animations**: Framer Motion
- **3D Rendering**: React Three Fiber / drei
- **Authentication**: Firebase Auth
- **State Management**: React Context API
- **Build Tools**: Vite
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 7.x or higher

## 🚀 Getting Started

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hotspots.git
   cd hotspots
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🔍 Project Structure

```
hotspots/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable UI components
│   │   ├── auth/           # Authentication components
│   │   ├── home/           # Home page components
│   │   ├── layouts/        # Layout components like Navbar, Footer
│   │   └── ui/             # Basic UI components (buttons, inputs, etc.)
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── services/           # API services
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── tailwind.config.cjs     # TailwindCSS configuration
└── package.json            # Project dependencies and scripts
```

## 🔧 Configuration

- **Tailwind Configuration**: Customize the design system in `tailwind.config.cjs`
- **Environment Variables**: Create a `.env` file based on `.env.example` for configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Project Link: [https://github.com/yourusername/hotspots](https://github.com/yourusername/hotspots)

---

<div align="center">
  Made with ❤️ by YourTeamName
</div>
