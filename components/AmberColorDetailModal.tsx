
import React from 'react';
import { AmberSpectrumDetail } from '../types';
import { CloseIcon } from './IconComponents';

interface AmberColorDetailModalProps {
  colorDetail: AmberSpectrumDetail | null;
  onClose: () => void;
}

const AmberColorDetailModal: React.FC<AmberColorDetailModalProps> = ({ colorDetail, onClose }) => {
  if (!colorDetail) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300" 
      onClick={onClose}
    >
      <div 
        className={`bg-[var(--background-color)] rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden relative border-4 ${colorDetail.borderColor} transition-transform duration-300 scale-95 animate-fade-in-up`} 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-up 0.3s ease-out forwards' }}
      >
        <div className="max-h-[90vh] overflow-y-auto p-2">
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
          <div className={`p-6 md:p-8 rounded-lg ${colorDetail.bgColor}`}>
            <div className="grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-2">
                    <img src={colorDetail.imageUrl} alt={colorDetail.title} className="w-full h-auto object-cover rounded-lg shadow-lg aspect-[4/3]" />
                </div>
                <div className="md:col-span-3">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-1 ${colorDetail.textColor ? colorDetail.textColor : 'text-stone-900'}`}>{colorDetail.title}</h2>
                    <p className={`font-serif text-xl italic mb-6 ${colorDetail.textColor ? `${colorDetail.textColor} opacity-90` : 'text-stone-700'}`}>{colorDetail.subtitle}</p>
                    
                    <div className={`space-y-3 text-base ${colorDetail.textColor ? `${colorDetail.textColor} opacity-90` : 'text-stone-800/90'}`}>
                        <p><strong>Visual Traits:</strong> {colorDetail.visual}</p>
                        <p><strong>Formation Science:</strong> {colorDetail.science}</p>
                        <p><strong>Rarity:</strong> {colorDetail.rarity}</p>
                        <p><strong>Spiritual Symbolism:</strong> {colorDetail.symbolism}</p>
                        <p><strong>Who It Suits:</strong> {colorDetail.suits}</p>
                        <p><strong>Element & Zodiac:</strong> {colorDetail.element}</p>
                        <p className="mt-4 pt-4 border-t border-black/10"><strong>Why Choose This Amber?</strong><br/>{colorDetail.why}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-3 right-3 text-stone-500 hover:text-stone-800 transition-colors rounded-full p-2 bg-[var(--background-color)]/50 hover:bg-[var(--background-color)]">
          <CloseIcon className="h-6 w-6"/>
        </button>
      </div>
    </div>
  );
};

export default AmberColorDetailModal;