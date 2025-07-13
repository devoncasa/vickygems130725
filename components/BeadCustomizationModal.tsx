import React, { useState, useEffect } from 'react';
import { BeadConfig, BeadSize } from '../types';
import { AMBER_COLOR_DETAILS, BEAD_SPECS } from '../constants';
import { CloseIcon } from './IconComponents';

interface BeadCustomizationModalProps {
    isOpen: boolean;
    onClose: () => void;
    beadIndex: number | null;
    beadConfigs: BeadConfig[];
    onUpdateBead: (index: number, newSize: BeadSize, newColorId: string) => void;
}

const BeadCustomizationModal: React.FC<BeadCustomizationModalProps> = ({
    isOpen,
    onClose,
    beadIndex,
    beadConfigs,
    onUpdateBead,
}) => {
    const currentBead = beadIndex !== null ? beadConfigs[beadIndex] : null;

    const [selectedSize, setSelectedSize] = useState<BeadSize>(10);
    const [selectedColorId, setSelectedColorId] = useState<string>('dark_honey');

    useEffect(() => {
        if (isOpen && currentBead) {
            setSelectedSize(currentBead.size);
            setSelectedColorId(currentBead.colorId);
        }
    }, [isOpen, currentBead]);

    if (!isOpen || currentBead === null || beadIndex === null) {
        return null;
    }

    const handleSave = () => {
        onUpdateBead(beadIndex, selectedSize, selectedColorId);
        onClose();
    };

    const selectedColor = AMBER_COLOR_DETAILS.find(c => c.id === selectedColorId);

    return (
        <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-[var(--c-surface)] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[90vh] overflow-y-auto">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-center text-[var(--c-heading)]">Customize Bead #{beadIndex + 1}</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {/* Color Selection */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-[var(--c-heading)]">Change Color</h3>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-2">
                                    {AMBER_COLOR_DETAILS.map(color => (
                                        <button
                                            key={color.id}
                                            onClick={() => setSelectedColorId(color.id)}
                                            className={`p-1.5 rounded-lg border-2 text-center transition-all duration-200 ${selectedColorId === color.id ? 'border-[var(--c-accent-primary)] scale-105 shadow-md' : 'border-transparent hover:border-[var(--c-accent-primary)]/50'}`}
                                            title={color.name}
                                        >
                                            <img src={color.imageUrl} alt={color.name} className="w-full h-14 object-cover rounded-md mb-1"/>
                                            <span className="font-semibold text-xs text-center block truncate text-[var(--c-text-secondary)]">{color.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Size & Preview */}
                            <div className="flex flex-col">
                                <div>
                                    <h3 className="font-semibold text-lg text-[var(--c-heading)]">Change Size</h3>
                                    <div className="my-4">
                                        <label htmlFor="beadSize" className="font-semibold mb-2 block text-sm">
                                            Size: <span className="text-[var(--c-accent-primary)] font-bold">{selectedSize.toFixed(2)} mm</span>
                                        </label>
                                        <input
                                            type="range"
                                            id="beadSize"
                                            min="8" max="14" step="0.25"
                                            value={selectedSize}
                                            onChange={e => setSelectedSize(Number(e.target.value))}
                                            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[var(--c-accent-primary)]"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex-grow flex flex-col items-center justify-center bg-[var(--c-surface-alt)] rounded-lg p-4 border border-[var(--c-border)]">
                                    <p className="font-semibold text-sm mb-2">Preview</p>
                                    <div className="w-24 h-24 rounded-full bg-cover bg-center shadow-lg"
                                        style={{ backgroundImage: `url(${selectedColor?.imageUrl})` }}
                                    ></div>
                                    <p className="mt-2 text-sm font-semibold">{selectedColor?.name}</p>
                                </div>
                            </div>
                        </div>
                         <div className="mt-8 pt-6 border-t border-[var(--c-border)] flex justify-end gap-3">
                            <button onClick={onClose} className="px-6 py-2 rounded-lg bg-stone-200 text-stone-700 font-semibold hover:bg-stone-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="px-6 py-2 rounded-lg btn-primary text-white font-bold">
                                Update Bead
                            </button>
                        </div>
                    </div>
                </div>
                 <button onClick={onClose} className="absolute top-3 right-3 text-stone-500 hover:text-stone-800 transition-colors rounded-full p-2 bg-[var(--c-surface)]/50 hover:bg-[var(--c-surface)]/80">
                    <CloseIcon className="h-6 w-6"/>
                </button>
            </div>
        </div>
    );
};

export default BeadCustomizationModal;