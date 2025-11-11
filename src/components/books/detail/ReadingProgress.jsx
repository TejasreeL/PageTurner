import { useState } from 'react';
import { FiBook } from 'react-icons/fi';

const ReadingProgress = ({ book }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(156);
  const totalPages = 384;
  const progress = (currentPage / totalPages) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-pageturner-dark mb-4">Reading Progress</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-pageturner-brown">
          <span>Page {currentPage} of {totalPages}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-3 bg-pageturner-light rounded-full overflow-hidden">
          <div
            className="h-full bg-pageturner-brown transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Update Progress Button */}
        <button
          onClick={() => setShowUpdateModal(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
        >
          <FiBook className="w-5 h-5" />
          <span>Update Progress</span>
        </button>
      </div>

      {/* Update Progress Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-pageturner-dark mb-4">Update Reading Progress</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-pageturner-dark mb-1">
                  Current Page
                </label>
                <input
                  type="number"
                  min="0"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-pageturner-beige rounded-md focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="flex-1 px-4 py-2 bg-pageturner-light text-pageturner-dark rounded-lg hover:bg-pageturner-beige transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle progress update
                    setShowUpdateModal(false);
                  }}
                  className="flex-1 px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
                >
                  Save Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadingProgress; 