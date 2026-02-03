import React, { createContext, useContext, useEffect, useState } from 'react';

interface WaitingListContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WaitingListContext = createContext<WaitingListContextType | undefined>(undefined);

export const WaitingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
  const hasSeenModal = localStorage.getItem('pikosend_seen_waitlist');
  
  if (!hasSeenModal) {
    const timer = setTimeout(() => {
      openModal();
      localStorage.setItem('pikosend_seen_waitlist', 'true');
    }, 2000); 
    
    return () => clearTimeout(timer);
  }
}, []);

  return (
    <WaitingListContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </WaitingListContext.Provider>
  );
};

export const useWaitingListModal = () => {
  const context = useContext(WaitingListContext);
  if (!context) {
    throw new Error('useWaitingListModal must be used within WaitingListProvider');
  }
  return context;
};