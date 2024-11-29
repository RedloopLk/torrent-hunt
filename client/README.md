# Torrent Hunt Frontend Documentation

## Background

This document provides the frontend architecture and detailed guidance for building the Torrent Hunt Application using React, TailwindCSS, and ShadCN. The aim is to ensure scalability, maintainability, and an intuitive development process.

## Folder Structure

The proposed folder structure follows best practices for React-based frontend applications with TailwindCSS:

```
/app
|-- /assets    # Static assets (e.g., images, icons)
/components    # Reusable React components
  |-- /ui      # UI components (e.g., buttons, modals)
  |-- /forms   # Form elements (e.g., input fields, dropdowns)
  |-- /common  # Coomon elements (e.g., wrappers,theme-menus)
/context       # Context API files (e.g., auth, theme)
/hooks         # Custom React hooks
/layouts       # Layout wrappers for pages
/pages         # React components for routes
/services      # API service files
/styles        # Global styles and Tailwind configuration
/utils         # Utility functions (e.g., formatters, validators)
/types         # TypeScript definitions
/tests         # Jest and React Testing Library test cases
```

## Page-wise Documentation

### 1. Home Page (Movie Search and Suggestions)

**Path**: `/`

**Components Used**:
- `SearchBar`: A reusable input component for keyword entry
- `MovieCard`: Displays search results (poster, title, ratings)
- `Pagination`: Handles paginated movie results

**Functionality**:
- Calls the movie suggestion API (e.g., TMDB) on search
- Displays a grid of movies fetched
- Implements responsive design using Tailwind utilities

**Example Code**:
```jsx
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = async () => {
    const response = await fetch(`/api/movies?query=${query}`);
    setMovies(await response.json());
  };

  useEffect(() => {
    if (query) fetchMovies();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar value={query} onChange={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Pagination />
    </div>
  );
}
```

**Styling**: 
- Use ShadCN for `SearchBar` (e.g., input with clear buttons) and Tailwind grid utilities for layout

### 2. Torrent Upload Section

**Path**: `/`

**Components Used**:
- `TorrentUploadForm`: Handles magnet link or `.torrent` file upload
- `ProgressBar`: Visual indicator of download/upload progress

**Functionality**:
- Users input a magnet link or upload a `.torrent` file
- Starts processing via WebTorrent in the backend
- Display status using WebSocket or polling

**Hooks**:
- `useTorrentUpload`: Custom hook to manage upload status and API interaction

**Example Code**:
```jsx
function UploadPage() {
  const { uploadStatus, startUpload } = useTorrentUpload();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Upload Torrent</h1>
      <TorrentUploadForm onUpload={startUpload} />
      {uploadStatus && <ProgressBar progress={uploadStatus.progress} />}
    </div>
  );
}
```

**Styling**:
- Tailwind forms (`form-control`, `input` classes)
- Use ShadCN for file input and buttons

### 3. Streaming Section

**Path**: `/mode-stream?id=#######`

**Components Used**:
- `VideoPlayer`: Custom player for movie streaming
- `SubtitleSelector`: Dropdown for choosing subtitles

**Functionality**:
- Fetches the movie stream URL using the movie ID
- Fetches available subtitles via the subtitle API
- Implements media controls (play, pause, volume)

**Hooks**:
- `useStream`: Custom hook to manage streaming states (buffering, errors)

**Example Code**:
```jsx
function StreamPage({ match }) {
  const { streamUrl, subtitles } = useStream(match.params.id);

  return (
    <div className="container mx-auto p-4">
      <VideoPlayer src={streamUrl} />
      <SubtitleSelector options={subtitles} />
    </div>
  );
}
```

**Styling**:
- Tailwind flex utilities for layout
- ShadCN dropdown for subtitle selection

## Global Components

### SearchBar

**Props**: 
- `value` (string): Current input value
- `onChange` (function): Callback for input change

**Example Usage**:
```jsx
<SearchBar 
  value={searchQuery} 
  onChange={(e) => setSearchQuery(e.target.value)} 
/>
```

**Styling**:
- Use Tailwind (`rounded`, `border`, `p-2` classes)

## Integration Details

1. **State Management**: Context API for authentication, theme
2. **Styling**:
   - TailwindCSS: Use utility classes for layouts and responsiveness
   - ShadCN: Apply for form elements, modals, and dropdowns
3. **Testing**: Jest + React Testing Library for component tests

## Future Enhancements

1. **Lazy Loading**: Implement lazy loading for movie cards using `react-lazy-load`
2. **State Libraries**: Integrate Zustand or Redux for complex state management
3. **Theming**: Support dynamic light/dark themes with Tailwind's theming capabilities