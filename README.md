# Profile Explorer

A modern React application for managing and exploring user profiles with interactive map integration. Built with React, TypeScript, Tailwind CSS, and Google Maps API.

### Profile View

![Profile](https://raw.githubusercontent.com/prakhar-8999/readmeImages/main/bynry/profile.png)

- Shows Profile

### Map View

![Map View](https://raw.githubusercontent.com/prakhar-8999/readmeImages/main/bynry/map.png)

- Shows Map

### Profile List

![Profile list](https://raw.githubusercontent.com/prakhar-8999/readmeImages/main/bynry/profile_list.png)

- Shows Profile List

### Add Profile Form

![Add Profile](https://raw.githubusercontent.com/prakhar-8999/readmeImages/main/bynry/add_profile.png)

- Shows Add Profile Form

## Features

### 🚀 Core Features

- **Profile Management**

  - View profiles in an intuitive card layout
  - Interactive map integration for location visualization
  - Detailed profile information display
  - Search and filter functionality

- **Admin Dashboard**

  - Create, edit, and delete profiles
  - Manage profile details and locations
  - User-friendly form interface
  - Validation and error handling

- **Map Integration**
  - Interactive Google Maps integration
  - Dynamic marker placement
  - Location preview for each profile
  - Smooth transitions and animations

### 💡 Additional Features

- **Search & Filter**

  - Real-time search functionality
  - Filter by name, location, or interests
  - Instant results updates

- **Responsive Design**

  - Mobile-first approach
  - Adapts to all screen sizes
  - Touch-friendly interface

- **User Experience**
  - Loading indicators
  - Error handling
  - Smooth animations
  - Intuitive navigation

## 🛠 Technology Stack

- **Frontend Framework**: React with TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Maps**: Google Maps API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Project Structure

```
src/
├── components/
│   ├── admin/
│   │   ├── ProfileForm.tsx
│   │   └── ProfileList.tsx
│   ├── map/
│   │   ├── GoogleMap.tsx
│   │   ├── MapLoadingIndicator.tsx
│   │   ├── MapView.tsx
│   │   └── ProfileLocationInfo.tsx
│   ├── AdminPanel.tsx
│   ├── ProfileCard.tsx
│   └── SearchBar.tsx
├── store/
│   └── profileStore.ts
├── types/
│   └── index.ts
├── hooks/
│   └── useMapStyles.ts
├── utils/
│   ├── mapUtils.ts
│   ├── validationUtils.ts
│   └── formatUtils.ts
├── App.tsx
└── main.tsx
```

## 🔨 Coding Best Practices

### File Organization

- **Small and Focused Files**: Each file has a single responsibility
- **Modular Structure**: Large components are broken down into smaller, reusable pieces
- **Clear Separation**: Logic is separated into appropriate directories (components, hooks, utils)
- **Utility Functions**: Common functionality is extracted into utility files

### Component Structure

- Components are kept small and focused
- Business logic is extracted into custom hooks
- Reusable UI elements are created as shared components
- Props are properly typed using TypeScript interfaces

### Code Quality

- Consistent code formatting using ESLint and Prettier
- Meaningful variable and function names
- Comments for complex logic
- Type safety with TypeScript
- Regular code reviews and refactoring

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Maps API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bynry.git
cd bynry
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google Maps API key:

```env
VITE_MAP_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## 🔧 Configuration

### Google Maps API

1. Get an API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API
   - Places API

### Environment Variables

Create a `.env` file with the following variables:

```env
VITE_MAP_API_KEY=your_api_key_here
```

Note: Make sure to use exactly `VITE_MAP_API_KEY` as the environment variable name for the Google Maps API key.
