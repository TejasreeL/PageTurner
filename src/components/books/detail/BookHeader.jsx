import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiHeart, FiShare2 } from 'react-icons/fi';

const BookHeader = ({ book }) => {
  const [shelf, setShelf] = useState('');
  
  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book Cover */}
          <div className="flex-shrink-0">
            <img
              src={book.cover}
              alt={book.title}
              className="w-64 h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Book Info */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-pageturner-dark">{book.title}</h1>
              <Link to={`/author/${book.author}`} className="text-xl text-pageturner-brown hover:text-pageturner-dark">
                {book.author}
              </Link>
            </div>

            {/* Book Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
              <DetailItem label="Type" value="Hardcover" />
              <DetailItem label="Pages" value="384" />
              <DetailItem label="Published" value="2023" />
              <DetailItem label="Publisher" value="Penguin Books" />
              <DetailItem label="Language" value="English" />
              <DetailItem label="ISBN" value="978-3-16-148410-0" />
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {book.genre.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 bg-pageturner-light text-pageturner-dark rounded-full hover:bg-pageturner-beige transition-colors duration-200 cursor-pointer"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex text-pageturner-brown">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-6 h-6 ${i < Math.floor(book.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-lg text-pageturner-brown">({book.rating})</span>
              </div>
              <span className="text-pageturner-brown">1,234 ratings</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <select
                value={shelf}
                onChange={(e) => setShelf(e.target.value)}
                className="px-4 py-2 border-2 border-pageturner-brown rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown transition-all duration-200 text-pageturner-dark cursor-pointer"
              >
                <option value="">Add to Shelf</option>
                <option value="want">Want to Read</option>
                <option value="reading">Currently Reading</option>
                <option value="read">Read</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-2 bg-pageturner-light text-pageturner-dark rounded-lg hover:bg-pageturner-beige transition-colors duration-200">
                <FiHeart className="w-5 h-5" />
                <span>Favorite</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-pageturner-light text-pageturner-dark rounded-lg hover:bg-pageturner-beige transition-colors duration-200">
                <FiShare2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div>
    <dt className="text-sm text-pageturner-brown">{label}</dt>
    <dd className="text-pageturner-dark font-medium">{value}</dd>
  </div>
);

export default BookHeader; 