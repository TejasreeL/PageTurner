import { Link } from 'react-router-dom';
import { BiLibrary } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/library"
              className="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
            >
              <BiLibrary className="w-5 h-5" />
              <span>Library</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 