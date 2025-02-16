import { useState } from 'react';
import BookGrid from '../components/books/BookGrid';
import ExplorerHeader from '../components/books/ExplorerHeader';

const BooksExplorerPage = () => {
  const [filters, setFilters] = useState({
    search: '',
    genres: [],
    language: 'all',
    sortBy: 'trending'
  });

  // Mock data - replace with actual API call
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "/book-1.jpg",
      genre: ["Classic", "Fiction"],
      rating: 4.5
    },
    // Add more mock books...
  ];

  return (
    <div className="min-h-screen bg-pageturner-light pb-12">
      <ExplorerHeader filters={filters} setFilters={setFilters} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookGrid books={books} />
      </div>
    </div>
  );
};

export default BooksExplorerPage; 