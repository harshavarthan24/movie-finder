# Movie Finder App

A React-based web application to search and discover movies using The Movie Database (TMDb) API. The app also integrates with Appwrite for tracking search statistics.

## Features

- **Search Movies**: Search through thousands of movies using TMDb API.
- **Popular Movies**: Discover trending and popular movies.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Search Analytics**: Tracks search terms and updates search statistics using Appwrite.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Appwrite (for search analytics)
- **API**: TMDb API

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-finder-app.git
cd movie-finder-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

Replace `your_tmdb_api_key`, `your_appwrite_project_id`, `your_appwrite_database_id`, and `your_appwrite_collection_id` with your actual credentials.

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
react/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React components
│   ├── styles/           # CSS and Tailwind styles
│   ├── App.jsx           # Main app component
│   ├── appwrite.js       # Appwrite integration
│   └── main.jsx          # Entry point
├── .env.local            # Environment variables
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.

## API Integration

### TMDb API

The app uses TMDb API to fetch movie data. Ensure you have a valid API key and set it in the `.env.local` file.

### Appwrite

Appwrite is used to track search analytics. Ensure you have an Appwrite project set up with the required database and collection.

## Deployment

To deploy the app, build the production version using:

```bash
npm run build
```

Then, serve the `dist` folder using any static file server or deploy it to platforms like Vercel, Netlify, or AWS.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TMDb API](https://www.themoviedb.org/documentation/api)
- [Appwrite](https://appwrite.io/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

