import React from 'react';
import BackToTopButton from './ui/BackToTopButton';
import ZaloContactButton from './ui/ZaloContactButton';

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      <ZaloContactButton />
      <BackToTopButton />
    </div>
  );
};

export default FloatingActionButtons;