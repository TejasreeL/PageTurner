import { useState } from 'react';
import { FiX, FiBook } from 'react-icons/fi';

const CreateDiscussionModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    relatedBook: null
  });

  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-pageturner-dark">Start a Discussion</h2>
            <button
              onClick={onClose}
              className="text-pageturner-brown hover:text-pageturner-dark"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <form className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-pageturner-dark mb-2">
                Discussion Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                placeholder="What would you like to discuss?"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-pageturner-dark mb-2">
                Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full h-40 px-4 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                placeholder="Share your thoughts..."
              />
            </div>

            {/* Related Book */}
            <div>
              <label className="block text-sm font-medium text-pageturner-dark mb-2">
                Related Book (Optional)
              </label>
              <button
                type="button"
                className="w-full flex items-center gap-2 px-4 py-2 border border-pageturner-beige rounded-lg text-pageturner-brown hover:bg-pageturner-light"
              >
                <FiBook className="w-5 h-5" />
                <span>Select a Book</span>
              </button>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-pageturner-dark mb-2">
                Tags
              </label>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                className="w-full px-4 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                placeholder="Add tags (press Enter to add)"
              />
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-pageturner-light text-pageturner-dark rounded-full"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="text-pageturner-brown hover:text-pageturner-dark"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-pageturner-dark hover:bg-pageturner-light rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
              >
                Post Discussion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDiscussionModal; 