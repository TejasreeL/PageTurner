import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BooksExplorerPage from './pages/BooksExplorerPage';
import BookDetailPage from './pages/BookDetailPage';
import CommunityPage from './pages/CommunityPage';
import DiscussionDetailPage from './pages/DiscussionDetailPage';
import WorldsExplorerPage from './pages/WorldsExplorerPage';
import Library from './pages/Library';
import LibraryDetail from './pages/LibraryDetail';
import ReadingPaths from './pages/ReadingPaths';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-pageturner-light">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/books" element={<BooksExplorerPage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/discussion/:id" element={<DiscussionDetailPage />} />
            <Route path="/worlds" element={<WorldsExplorerPage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:id" element={<LibraryDetail />} />
            <Route path="/reading-paths" element={<ReadingPaths />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 