import { useState } from 'react';

const BookshelvesSection = () => {
  const [activeTab, setActiveTab] = useState('reading');
  
  const tabs = [
    { id: 'reading', label: 'Currently Reading' },
    { id: 'want', label: 'Want to Read' },
    { id: 'read', label: 'Read' },
    { id: 'custom', label: 'Custom Shelves' },
  ];

  const books = {
    reading: [
      {
        id: 1,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
      },
      {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
      }
    ],
    want: [
      {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg"
      },
      {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81f7bXC-tTL.jpg"
      },
      {
        id: 5,
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91jBdaRVqML.jpg"
      }
    ],
    read: [
      {
        id: 6,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"
      },
      {
        id: 7,
        title: "Fantastic Beasts and Where to Find Them",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91cX6xKrZL.jpg"
      },
      {
        id: 8,
        title: "The Tales of Beedle the Bard",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91WVoXDX3YL.jpg"
      }
    ],
    custom: [
      {
        shelfName: "Magical Books",
        books: [
          {
            id: 9,
            title: "Quidditch Through the Ages",
            author: "Kennilworthy Whisp",
            cover: "https://images-na.ssl-images-amazon.com/images/I/91zZB9SzpPL.jpg"
          },
          {
            id: 10,
            title: "Hogwarts: A History",
            author: "Bathilda Bagshot",
            cover: "https://m.media-amazon.com/images/I/91cUoFGWypL._AC_UF1000,1000_QL80_.jpg"
          }
        ]
      },
      {
        shelfName: "Fantasy Favorites",
        books: [
          {
            id: 11,
            title: "The Two Towers",
            author: "J.R.R. Tolkien",
            cover: "https://images-na.ssl-images-amazon.com/images/I/91HqOO4DmRL.jpg"
          },
          {
            id: 12,
            title: "The Return of the King",
            author: "J.R.R. Tolkien",
            cover: "https://images-na.ssl-images-amazon.com/images/I/91PZI4P2NFL.jpg"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Tabs */}
      <div className="border-b border-pageturner-beige sticky top-0 bg-white rounded-t-lg">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-pageturner-brown text-pageturner-dark'
                  : 'text-pageturner-brown hover:text-pageturner-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === 'custom' ? (
            books.custom.map((shelf, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-medium text-pageturner-dark">{shelf.shelfName}</h3>
                {shelf.books.map((book) => (
                  <div key={book.id} className="flex gap-3 p-3 rounded-lg hover:bg-pageturner-light transition-colors">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded-md shadow-md"
                    />
                    <div>
                      <h3 className="font-medium text-pageturner-dark">{book.title}</h3>
                      <p className="text-sm text-pageturner-brown">{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            books[activeTab].map((book) => (
              <div key={book.id} className="flex gap-3 p-3 rounded-lg hover:bg-pageturner-light transition-colors">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-20 h-28 object-cover rounded-md shadow-md"
                />
                <div>
                  <h3 className="font-medium text-pageturner-dark">{book.title}</h3>
                  <p className="text-sm text-pageturner-brown">{book.author}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookshelvesSection; 