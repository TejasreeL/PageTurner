import { Link } from 'react-router-dom';
import { FiBook, FiUsers, FiAward, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { sampleBooks } from '../data/sampleBooks';

const HomePage = () => {
  const featuredBooks = sampleBooks.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pageturner-brown to-pageturner-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Your Next Great Read Awaits
            </h1>
            <p className="text-xl md:text-2xl text-pageturner-beige max-w-2xl mx-auto">
              Join our community of book lovers. Discover, track, and discuss your favorite books.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-white text-pageturner-dark font-medium rounded-lg hover:bg-pageturner-beige transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/books"
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Explore Books
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pageturner-dark text-center mb-12">
            Everything You Need for Your Reading Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FiBook}
              title="Track Your Books"
              description="Keep track of your reading progress and organize your personal library."
            />
            <FeatureCard
              icon={FiUsers}
              title="Join Discussions"
              description="Connect with other readers and share your thoughts on your favorite books."
            />
            <FeatureCard
              icon={FiAward}
              title="Reading Challenges"
              description="Set reading goals and participate in community challenges."
            />
            <FeatureCard
              icon={FiTrendingUp}
              title="Discover More"
              description="Get personalized recommendations based on your reading preferences."
            />
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="py-20 bg-pageturner-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-pageturner-dark">
              Featured Books
            </h2>
            <Link
              to="/books"
              className="flex items-center gap-2 text-pageturner-brown hover:text-pageturner-dark"
            >
              View All <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="aspect-[2/3] relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-pageturner-dark mb-2">
                    {book.title}
                  </h3>
                  <p className="text-pageturner-brown mb-4">{book.author}</p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FiBook
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? "fill-current text-pageturner-brown"
                            : "text-pageturner-beige"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-pageturner-brown">
                      ({book.rating})
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-pageturner-dark">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-pageturner-brown">
                Connect with fellow book lovers, participate in reading challenges, and engage in meaningful discussions about your favorite books.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/community"
                  className="px-6 py-3 bg-pageturner-brown text-white font-medium rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
                >
                  Explore Community
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Stat number="10K+" label="Active Readers" />
                <Stat number="50K+" label="Books Tracked" />
              </div>
              <div className="space-y-4 mt-8">
                <Stat number="25K+" label="Discussions" />
                <Stat number="100K+" label="Reviews" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 text-center space-y-4">
    <div className="w-16 h-16 bg-pageturner-light rounded-full flex items-center justify-center mx-auto">
      <Icon className="w-8 h-8 text-pageturner-brown" />
    </div>
    <h3 className="text-xl font-semibold text-pageturner-dark">{title}</h3>
    <p className="text-pageturner-brown">{description}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div className="bg-pageturner-light rounded-lg p-6 text-center">
    <div className="text-3xl font-bold text-pageturner-brown mb-1">{number}</div>
    <div className="text-pageturner-dark">{label}</div>
  </div>
);

export default HomePage; 