import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiClock, FiBook, FiHeart } from 'react-icons/fi';
import BookHeader from '../components/books/detail/BookHeader';
import BookDescription from '../components/books/detail/BookDescription';
import ReadingProgress from '../components/books/detail/ReadingProgress';
import ReviewSection from '../components/books/detail/ReviewSection';
import SimilarBooks from '../components/books/detail/SimilarBooks';
import { sampleBooks } from '../data/sampleBooks';

const BookDetailPage = () => {
  const { id } = useParams();
  const book = sampleBooks.find(b => b.id === parseInt(id)) || sampleBooks[0];

  return (
    <div className="min-h-screen bg-pageturner-light pb-12">
      <BookHeader book={book} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <BookDescription book={book} />
            <ReadingProgress book={book} />
            <ReviewSection book={book} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SimilarBooks currentBook={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage; 