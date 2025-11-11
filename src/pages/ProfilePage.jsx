import { useState } from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import BookshelvesSection from '../components/profile/BookshelvesSection';
import ReadingProgress from '../components/profile/ReadingProgress';
import SocialStats from '../components/profile/SocialStats';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-pageturner-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookshelvesSection />
            <ReadingProgress />
          </div>
          <div className="lg:col-span-1">
            <SocialStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 