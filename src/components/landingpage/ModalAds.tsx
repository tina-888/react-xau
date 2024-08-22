import React from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalAds: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col justify-center w-[830px] h-[430px] bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="relative w-full h-full">
          <img src="/images/landingPage/ads.jpg" alt="presale" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-10 flex justify-center h-10 pl-4">
            <Link to="/goldearning" className="inline-flex items-center px-6 py-3 text-base font-semibold text-center text-white bg-custom-gold-rod rounded-3xl hover:bg-white hover:text-custom-gold-rod transition duration-300">
              Join Now
            </Link>
          </div>
        </div>
        <button className="absolute top-4 right-4 text-white hover:text-custom-gold-rod transition duration-300" onClick={onClose} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
};

export default ModalAds;
