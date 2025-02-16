const ReadingProgress = () => {
  const currentlyReading = [
    {
      id: 1,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      cover: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
      progress: 45
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
      progress: 30
    }
  ];

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-pageturner-dark mb-4">Currently Reading</h2>
      
      <div className="space-y-6">
        {currentlyReading.map((book) => (
          <div key={book.id} className="flex gap-4">
            <img
              src={book.cover}
              alt={book.title}
              className="w-24 h-36 object-cover rounded-md shadow-md"
            />
            <div className="flex-1">
              <h3 className="font-medium text-pageturner-dark">{book.title}</h3>
              <p className="text-sm text-pageturner-brown">{book.author}</p>
              
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="flex justify-between text-sm text-pageturner-brown mb-1">
                  <span>Progress</span>
                  <span>{book.progress}%</span>
                </div>
                <div className="h-2 bg-pageturner-light rounded-full">
                  <div 
                    className="h-full bg-pageturner-brown rounded-full transition-all duration-300"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Update Progress Button */}
              <button className="mt-3 text-sm bg-pageturner-beige text-pageturner-dark px-4 py-1 rounded-full hover:bg-pageturner-brown hover:text-white transition-colors">
                Update Progress
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingProgress; 