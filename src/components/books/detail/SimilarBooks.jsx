import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { sampleBooks } from '../../../data/sampleBooks';

const SimilarBooks = ({ currentBook }) => {
  // Filter books with similar genres, excluding the current book
  const similarBooks = sampleBooks
    .filter(book => 
      book.id !== currentBook.id && 
      book.genre.some(g => currentBook.genre.includes(g))
    )
    .slice(0, 4);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-pageturner-dark mb-4">Similar Books</h2>
      
      <div className="space-y-4">
        {similarBooks.map((book) => (
          <Link 
            key={book.id}
            to={`/book/${book.id}`}
            className="flex gap-4 group hover:bg-pageturner-light p-2 rounded-lg transition-colors duration-200"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-16 h-24 object-cover rounded-md shadow-sm"
            />
            <div className="flex-1">
              <h3 className="font-medium text-pageturner-dark group-hover:text-pageturner-brown transition-colors duration-200">
                {book.title}
              </h3>
              <p className="text-sm text-pageturner-brown">{book.author}</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex text-pageturner-brown">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(book.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-pageturner-brown">({book.rating})</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarBooks; 