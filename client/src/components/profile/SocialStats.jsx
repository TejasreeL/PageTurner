const SocialStats = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-pageturner-dark mb-4">Social</h2>
      
      <div className="flex justify-around mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-pageturner-dark">245</div>
          <div className="text-sm text-pageturner-brown">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pageturner-dark">182</div>
          <div className="text-sm text-pageturner-brown">Following</div>
        </div>
      </div>

      {/* Reading Stats */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-pageturner-dark mb-3">Reading Stats</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-pageturner-brown">Books Read</span>
            <span className="text-pageturner-dark font-medium">24</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-pageturner-brown">Reading Paths</span>
            <span className="text-pageturner-dark font-medium">3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-pageturner-brown">Reviews Written</span>
            <span className="text-pageturner-dark font-medium">15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStats; 