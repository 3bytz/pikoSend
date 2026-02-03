import React from 'react';
import { Sparkles } from 'lucide-react';
import { useWaitingListModal } from '../../contexts/WaitingListContext';



export const WaitingListCTA: React.FC = () => {
  const { openModal } = useWaitingListModal();

  return (
    <button
      onClick={openModal}
      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-piko-purple to-piko-violet text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-piko-purple/30 animate-pulse"
    >
      <Sparkles className="w-5 h-5" />
      Join Waitlist
    </button>
  );
};


export const FloatingWaitingListCTA: React.FC = () => {
  const { openModal } = useWaitingListModal();

  return (
    <>
      
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button
          onClick={openModal}
          className="w-14 h-14 bg-gradient-to-r from-piko-purple to-piko-violet rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label="Join waiting list"
        >
          <Sparkles className="w-6 h-6" />
        </button>
      </div>

      
      <div className="hidden md:fixed md:right-0 md:top-1/2 md:-translate-y-1/2 md:z-40">
        <button
          onClick={openModal}
          className="group flex items-center gap-3 bg-gradient-to-r from-piko-purple to-piko-violet text-white pl-5 pr-5 py-4 rounded-l-2xl shadow-2xl hover:pr-8 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Priority Access
          </span>
        </button>
      </div>
    </>
  );
};