import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
import LibraryHeader from '../components/library/LibraryHeader';
import BookCard from '../components/library/BookCard';
import CustomLibraries from '../components/library/CustomLibraries';

const Library = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      cover: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
      rating: 4.8,
      reviewsCount: 12847,
      genres: ["Fantasy", "Young Adult", "Magic"],
      description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs..."
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      cover: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
      rating: 4.7,
      reviewsCount: 10592,
      genres: ["Fantasy", "Young Adult", "Magic"],
      description: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry..."
    },
    {
      id: 3,
      title: "Fantastic Beasts and Where to Find Them",
      author: "Newt Scamander",
      cover: "https://images-na.ssl-images-amazon.com/images/I/91cX6xKrZL.jpg",
      rating: 4.6,
      reviewsCount: 5421,
      genres: ["Fantasy", "Reference", "Magic"],
      description: "A guide to magical creatures that is used as a textbook at Hogwarts School of Witchcraft and Wizardry..."
    },
    {
      id: 4,
      title: "Quidditch Through the Ages",
      author: "Kennilworthy Whisp",
      cover: "https://images-na.ssl-images-amazon.com/images/I/91zZB9SzpPL.jpg",
      rating: 4.5,
      reviewsCount: 3254,
      genres: ["Fantasy", "Sports", "Magic"],
      description: "The most checked-out book in the Hogwarts Library, this comprehensive guide to the wizard's sport is a must-read for fans of the game..."
    },
    {
      id: 5,
      title: "The Tales of Beedle the Bard",
      author: "Beedle the Bard",
      cover: "https://images-na.ssl-images-amazon.com/images/I/91WVoXDX3YL.jpg",
      rating: 4.7,
      reviewsCount: 4589,
      genres: ["Fantasy", "Fairy Tales", "Magic"],
      description: "A collection of wizarding fairy tales that has been entertaining young witches and wizards for centuries..."
    },
    {
      id: 6,
      title: "Advanced Potion Making",
      author: "Libatius Borage",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71RUbU+1bpL.jpg",
      rating: 4.4,
      reviewsCount: 2156,
      genres: ["Academic", "Potions", "Magic"],
      description: "The standard potions textbook used by Hogwarts students in their sixth year..."
    }
  ]);

  const [libraries, setLibraries] = useState([
    {
      id: 1,
      name: "Hogwarts Required Reading",
      bookCount: 3,
    },
    {
      id: 2,
      name: "Restricted Section",
      bookCount: 2,
    },
    {
      id: 3,
      name: "Magical Creatures",
      bookCount: 1,
    }
  ]);

  const handleSearch = (query) => {
    // Filter books based on search query
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    setBooks(filtered);
  };

  const handleFilter = (filters) => {
    // Implement filter logic
    console.log('Filtering with:', filters);
  };

  const handleSort = (sortOption) => {
    let sorted = [...books];
    switch(sortOption) {
      case 'Trending':
        sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case 'Highly Rated':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'Recently Added':
        // You would typically use a timestamp here
        sorted.reverse();
        break;
      default:
        break;
    }
    setBooks(sorted);
  };

  const handleAddToLibrary = (book) => {
    // Show a success message
    alert(`Added "${book.title}" to your library!`);
  };

  const handleCreateLibrary = (name) => {
    const newLibrary = {
      id: libraries.length + 1,
      name,
      bookCount: 0
    };
    setLibraries([...libraries, newLibrary]);
  };

  return (
    <div className="min-h-screen bg-[#e8e1d1]">
      {/* <Navbar /> */}
      <LibraryHeader
        onSearch={handleSearch}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Book Grid */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onAddToLibrary={handleAddToLibrary}
                  onClick={() => {/* Handle book click */}}
                />
              ))}
            </div>
          </div>

          {/* Custom Libraries Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-24">
              <CustomLibraries
                libraries={libraries}
                onCreateLibrary={handleCreateLibrary}
                onEditLibrary={(library) => {
                  const newName = prompt('Enter new name for library:', library.name);
                  if (newName) {
                    const updatedLibraries = libraries.map(lib => 
                      lib.id === library.id ? {...lib, name: newName} : lib
                    );
                    setLibraries(updatedLibraries);
                  }
                }}
                onDeleteLibrary={(id) => {
                  if (confirm('Are you sure you want to delete this library?')) {
                    setLibraries(libraries.filter(lib => lib.id !== id));
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library; 