import React, { useState, useMemo, useEffect, useRef } from 'react';
import { BeadSize, AmberColorDetail, BeadConfig, CustomBraceletFromBuilderDetails } from '../types';
import { BEAD_SPECS, AMBER_COLOR_DETAILS } from '../constants';
import { toPng } from 'html-to-image';
import BeadCustomizationModal from './BeadCustomizationModal';

const formatCurrency = (amount: number) => {
    return `฿${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

const BraceletBuilder: React.FC = () => {
    // --- State ---
    const [wristSize, setWristSize] = useState<number>(16.5);
    const [pattern, setPattern] = useState<BeadConfig[]>(() => [
        { id: `pattern-0-${Date.now()}`, colorId: 'dark_honey', size: 10 },
        { id: `pattern-1-${Date.now()}`, colorId: 'root', size: 12 },
        { id: `pattern-2-${Date.now()}`, colorId: 'dark_honey', size: 10 },
    ]);
    const [selectedPatternIndex, setSelectedPatternIndex] = useState<number | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const captureAreaRef = useRef<HTMLDivElement>(null);
    
    // --- Calculations ---
    const { finalBeads, summary } = useMemo(() => {
        if (pattern.length === 0) {
            return {
                finalBeads: [],
                summary: { totalPrice: 0, totalWeight: 0, totalLength: 0, beadCount: 0 }
            };
        }

        const comfortFit_cm = 1.5; // Add extra length for a comfortable fit
        const targetCircumference_mm = (wristSize + comfortFit_cm) * 10;

        let calculatedBeads: BeadConfig[] = [];
        let currentLength_mm = 0;
        let i = 0;
        while (currentLength_mm < targetCircumference_mm) {
            const patternBead = pattern[i % pattern.length];
            calculatedBeads.push({
                ...patternBead,
                id: `final-${i}-${patternBead.id}` // Create unique ID for the final bead
            });
            currentLength_mm += patternBead.size;
            i++;
        }
        
        let totalPrice = 0;
        let totalWeight = 0;
        calculatedBeads.forEach(bead => {
            const beadSpec = BEAD_SPECS.find(s => s.size === bead.size);
            const color = AMBER_COLOR_DETAILS.find(c => c.id === bead.colorId);
            if (beadSpec && color) {
                const beadWeight = beadSpec.weight;
                totalWeight += beadWeight;
                totalPrice += color.basePricePerGram * beadWeight;
            }
        });

        return {
            finalBeads: calculatedBeads,
            summary: { totalPrice, totalWeight, totalLength: currentLength_mm, beadCount: calculatedBeads.length }
        };
    }, [wristSize, pattern]);
    
    const beadComposition = useMemo(() => {
        if (!summary.beadCount) return [];
        
        const compositionMap = new Map<string, { count: number; colorName: string; size: number }>();
        
        finalBeads.forEach(bead => {
            const key = `${bead.colorId}-${bead.size}`;
            const color = AMBER_COLOR_DETAILS.find(c => c.id === bead.colorId);
            
            if (compositionMap.has(key)) {
                compositionMap.get(key)!.count++;
            } else {
                compositionMap.set(key, {
                    count: 1,
                    colorName: color?.name || 'Unknown',
                    size: bead.size
                });
            }
        });
        
        return Array.from(compositionMap.values());
    }, [finalBeads, summary.beadCount]);

    const displayRadius = useMemo(() => {
        if (finalBeads.length < 2) return 0;
        const SCALING_FACTOR = 2.5;
        const totalCircumference = finalBeads.reduce((sum, bead) => sum + (bead.size * SCALING_FACTOR), 0);
        return totalCircumference / (2 * Math.PI);
    }, [finalBeads]);


    // --- Handlers ---
    const handleAddBeadToPattern = () => {
        setPattern(prev => [...prev, {
            id: `pattern-${prev.length}-${Date.now()}`,
            colorId: 'golden',
            size: 10
        }]);
    };
    
    const handleRemoveBeadFromPattern = () => {
        if (pattern.length > 1) {
            setPattern(prev => prev.slice(0, -1));
        }
    };

    const handleUpdatePatternBead = (index: number, newSize: BeadSize, newColorId: string) => {
        setPattern(prev => prev.map((bead, i) => 
            i === index ? { ...bead, size: newSize, colorId: newColorId } : bead
        ));
    };

    const handleAutoDesign = () => {
        const highValueColors = AMBER_COLOR_DETAILS.filter(c => c.basePricePerGram >= 1000).map(c => c.id);
        const mediumValueColors = AMBER_COLOR_DETAILS.filter(c => c.basePricePerGram >= 300 && c.basePricePerGram < 1000).map(c => c.id);
        
        if (highValueColors.length === 0 || mediumValueColors.length === 0) {
            console.error("Not enough color variety for auto-design.");
            setPattern([
                { id: `fallback-0-${Date.now()}`, colorId: 'root', size: 10 },
                { id: `fallback-1-${Date.now()}`, colorId: 'golden', size: 12 },
                { id: `fallback-2-${Date.now()}`, colorId: 'root', size: 10 },
            ]);
            return;
        }

        const strategies = ['FocalPoint', 'Rhythmic', 'Alternating'];
        const chosenStrategy = strategies[Math.floor(Math.random() * strategies.length)];

        let newPattern: BeadConfig[] = [];
        const patternLength = Math.random() > 0.5 ? 5 : 3;

        const focalColor = highValueColors[Math.floor(Math.random() * highValueColors.length)];
        const baseColor1 = mediumValueColors[Math.floor(Math.random() * mediumValueColors.length)];
        let baseColor2 = mediumValueColors[Math.floor(Math.random() * mediumValueColors.length)];
        if (mediumValueColors.length > 1) {
            while (baseColor2 === baseColor1) {
                baseColor2 = mediumValueColors[Math.floor(Math.random() * mediumValueColors.length)];
            }
        }
        
        const largeSizes: BeadSize[] = [11, 12, 14];
        const mediumSizes: BeadSize[] = [9, 10];

        const focalSize = largeSizes[Math.floor(Math.random() * largeSizes.length)];
        const baseSize = mediumSizes[Math.floor(Math.random() * mediumSizes.length)];

        switch (chosenStrategy) {
            case 'FocalPoint':
                if (patternLength === 3) { // A-B-A
                    newPattern = [
                        { id: `auto-0-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-1-${Date.now()}`, colorId: focalColor, size: focalSize },
                        { id: `auto-2-${Date.now()}`, colorId: baseColor1, size: baseSize },
                    ];
                } else { // A-B-C-B-A
                    newPattern = [
                        { id: `auto-0-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-1-${Date.now()}`, colorId: baseColor2, size: (baseSize + focalSize) / 2 },
                        { id: `auto-2-${Date.now()}`, colorId: focalColor, size: focalSize },
                        { id: `auto-3-${Date.now()}`, colorId: baseColor2, size: (baseSize + focalSize) / 2 },
                        { id: `auto-4-${Date.now()}`, colorId: baseColor1, size: baseSize },
                    ];
                }
                break;
            
            case 'Rhythmic':
                 if (patternLength === 3) {
                    newPattern = [
                        { id: `auto-0-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-1-${Date.now()}`, colorId: focalColor, size: focalSize },
                        { id: `auto-2-${Date.now()}`, colorId: baseColor1, size: baseSize },
                    ];
                 } else { // A-A-B-A-A
                    newPattern = [
                        { id: `auto-0-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-1-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-2-${Date.now()}`, colorId: focalColor, size: focalSize },
                        { id: `auto-3-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-4-${Date.now()}`, colorId: baseColor1, size: baseSize },
                    ];
                 }
                break;
            
            case 'Alternating':
            default:
                if (patternLength === 3) {
                     newPattern = [
                        { id: `auto-0-${Date.now()}`, colorId: baseColor1, size: baseSize },
                        { id: `auto-1-${Date.now()}`, colorId: baseColor2, size: focalSize },
                        { id: `auto-2-${Date.now()}`, colorId: baseColor1, size: baseSize },
                    ];
                } else {
                    for (let i = 0; i < patternLength; i++) {
                        const color = i % 2 === 0 ? baseColor1 : baseColor2;
                        const size = i % 2 === 0 ? baseSize : focalSize;
                        newPattern.push({ id: `auto-${i}-${Date.now()}`, colorId: color, size: size });
                    }
                }
                break;
        }
        setPattern(newPattern);
    };
    
    const handleAction = async (action: 'capture' | 'submit') => {
        if (!captureAreaRef.current || finalBeads.length <= 0 || isProcessing) return;
        setIsProcessing(true);

        const designCode = `VAG-CUSTOM-${Date.now()}`;
        const filename = `${designCode}.png`;
        const watermarkOverlay = document.createElement('div');

        try {
            if (action === 'submit' && captureAreaRef.current) {
                watermarkOverlay.style.position = 'absolute';
                watermarkOverlay.style.inset = '0';
                watermarkOverlay.style.zIndex = '1000';
                watermarkOverlay.style.display = 'flex';
                watermarkOverlay.style.flexWrap = 'wrap';
                watermarkOverlay.style.justifyContent = 'center';
                watermarkOverlay.style.alignItems = 'center';
                watermarkOverlay.style.overflow = 'hidden';
                watermarkOverlay.style.pointerEvents = 'none';
                const watermarkText = "Vicky Amber & Gems";
                let content = '';
                for (let i = 0; i < 150; i++) {
                    content += `<span style="color: rgba(83, 75, 66, 0.08); font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; transform: rotate(-30deg); padding: 30px 50px; white-space: nowrap; user-select: none;">${watermarkText}</span>`;
                }
                watermarkOverlay.innerHTML = content;
                captureAreaRef.current.style.position = 'relative';
                captureAreaRef.current.appendChild(watermarkOverlay);
            }
            
            const dataUrl = await toPng(captureAreaRef.current, { backgroundColor: '#F8F5F2', pixelRatio: 2 });

            const link = document.createElement('a');
            link.download = filename;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            if (action === 'submit') {
                let summaryString = '';
                for (const bead of beadComposition) {
                    summaryString += `- ${bead.count}x ${bead.colorName} (${bead.size.toFixed(2)}mm)\n`;
                }
                
                const textSummary = `New Custom Bracelet Pre-Order Inquiry
---------------------------------
Design Code: ${designCode}
---------------------------------
SPECIFICATIONS:
- Target Wrist Size: ${wristSize.toFixed(1)} cm
- Final Length: ${(summary.totalLength / 10).toFixed(1)} cm
- Total Beads: ${summary.beadCount}
- Est. Total Weight: ${summary.totalWeight.toFixed(2)} g
- Est. Total Price: ${formatCurrency(summary.totalPrice)}

BEAD COMPOSITION:
${summaryString}
---------------------------------
Please confirm availability and payment details. Thank you!
`.trim().replace(/^\s+/gm, '');

                await navigator.clipboard.writeText(textSummary);
                alert("Your bracelet image has been downloaded and order details are copied to your clipboard.\n\nA new window will open to our Facebook chat. Please paste the details and upload the image there to finalize your pre-order with our team.");
                window.open('https://www.facebook.com/messages/t/VKMMAmber', '_blank', 'noopener,noreferrer');
            } else {
                 alert('Design image saved to your downloads!');
            }

        } catch (err) {
            console.error('Failed to process action:', err);
            alert('An error occurred. Please try again or contact us directly.');
        } finally {
             if (action === 'submit' && captureAreaRef.current && captureAreaRef.current.contains(watermarkOverlay)) {
                captureAreaRef.current.removeChild(watermarkOverlay);
                captureAreaRef.current.style.position = '';
            }
            setIsProcessing(false);
        }
    };
    
    const getBeadEffectClass = (colorId: string): string => {
        const color = AMBER_COLOR_DETAILS.find(c => c.id === colorId);
        if (!color) return 'bead-crystal';
        switch (color.id) {
            case 'mila': return 'bead-wax';
            case 'root': return 'bead-wood';
            default: return 'bead-crystal';
        }
    };
    
    const renderBraceletPreview = () => {
        let cumulativeAngle = -Math.PI / 2;
        const SCALING_FACTOR = 2.5;

        return finalBeads.map((bead, index) => {
            const displayDiameter = bead.size * SCALING_FACTOR;
            const arcAngle = displayDiameter / displayRadius;
            const beadCenterAngle = cumulativeAngle + arcAngle / 2;
            const x = displayRadius * Math.cos(beadCenterAngle);
            const y = displayRadius * Math.sin(beadCenterAngle);
            cumulativeAngle += arcAngle;
            const color = AMBER_COLOR_DETAILS.find(c => c.id === bead.colorId);

            return (
                <div
                    key={bead.id}
                    className={`absolute rounded-full shadow-sm ${getBeadEffectClass(bead.colorId)}`}
                    style={{
                        width: `${displayDiameter}px`,
                        height: `${displayDiameter}px`,
                        backgroundImage: `url(${color?.imageUrl})`,
                        backgroundSize: 'cover',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                    title={`${color?.name} ${bead.size}mm`}
                />
            );
        });
    };

    return (
        <div className="space-y-8" style={{ color: 'var(--c-builder-text)' }}>
            
            <BeadCustomizationModal
                isOpen={selectedPatternIndex !== null}
                onClose={() => setSelectedPatternIndex(null)}
                beadIndex={selectedPatternIndex}
                beadConfigs={pattern}
                onUpdateBead={handleUpdatePatternBead}
            />

            {/* --- Step 1: Wrist Size --- */}
            <div className="bg-[var(--c-builder-section-bg)] p-6 rounded-lg shadow-sm border border-[var(--c-builder-separator)]">
                <h3 className="font-semibold text-lg text-[var(--c-builder-heading)]">1. Set Your Wrist Size</h3>
                <p className="text-sm opacity-70 mb-3">Adjust the slider to your wrist measurement. We'll calculate the number of beads for a perfect fit.</p>
                <div className="flex items-center gap-4">
                    <input
                        type="range"
                        id="wristSize"
                        min="14" max="22" step="0.5"
                        value={wristSize}
                        onChange={e => setWristSize(Number(e.target.value))}
                        className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[var(--c-accent-primary)]"
                    />
                    <span className="font-bold text-lg text-[var(--c-accent-primary)] w-24 text-center">{wristSize.toFixed(1)} cm</span>
                </div>
            </div>

            {/* --- Step 2: Design Pattern --- */}
            <div className="bg-[var(--c-builder-section-bg)] p-6 rounded-lg shadow-sm border border-[var(--c-builder-separator)]">
                <h3 className="font-semibold text-lg text-[var(--c-builder-heading)]">2. Design Your Repeating Pattern</h3>
                <p className="text-sm opacity-70 mb-4">Click any bead to customize it. This pattern will be repeated to create your full bracelet.</p>
                <div className="flex items-center justify-center gap-2 p-4 bg-[var(--c-surface-alt)] rounded-md border border-[var(--c-border)] min-h-[80px] flex-wrap">
                    {pattern.map((bead, index) => {
                        const color = AMBER_COLOR_DETAILS.find(c => c.id === bead.colorId);
                        return (
                            <button key={bead.id} onClick={() => setSelectedPatternIndex(index)} className="text-center group">
                                <div 
                                    className={`w-12 h-12 rounded-full mx-auto bg-cover bg-center shadow-md border-2 border-transparent group-hover:border-[var(--c-accent-primary)] group-hover:scale-110 transition-all ${getBeadEffectClass(bead.colorId)}`}
                                    style={{ backgroundImage: `url(${color?.imageUrl})`}}
                                ></div>
                                <span className="text-xs mt-1 block font-semibold">{bead.size.toFixed(1)}mm</span>
                            </button>
                        )
                    })}
                </div>
                 <div className="mt-4 text-center space-y-3">
                     <div className="flex items-center gap-4">
                        <button onClick={handleAddBeadToPattern} className="btn-primary flex-1 py-2 rounded-md">Add Bead to Pattern</button>
                        <button onClick={handleRemoveBeadFromPattern} className="bg-stone-200 text-stone-700 flex-1 py-2 rounded-md hover:bg-stone-300 transition-colors disabled:opacity-50" disabled={pattern.length <= 1}>Remove Last Bead</button>
                    </div>
                    <button onClick={handleAutoDesign} className="px-6 py-2 rounded-lg bg-[var(--c-accent-secondary)] text-white font-semibold hover:bg-[var(--c-accent-secondary-hover)] transition-colors shadow-sm">
                        ✨ Auto-Design Amber Style
                    </button>
                </div>
            </div>

            {/* --- Step 3: Preview & Summary --- */}
            <div className="bg-[var(--c-builder-bg)] p-6 rounded-lg shadow-inner border border-[var(--c-builder-separator)] sticky top-24 z-10">
                <h3 className="font-semibold text-lg text-center text-[var(--c-builder-heading)]">3. Bracelet Preview & Summary</h3>
                <p className="text-sm opacity-70 mb-4 text-center">This is the final bracelet based on your wrist size and pattern.</p>
                
                <div ref={captureAreaRef} className="bg-[var(--c-bg)] p-4 my-4 rounded-lg border border-[var(--c-builder-separator)]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                        <div className="lg:col-span-2 aspect-square relative flex items-center justify-center mx-auto w-2/3 lg:w-full">
                            <div className="w-full h-full relative">
                                {finalBeads.length > 0 ? renderBraceletPreview() : (
                                    <div className="absolute inset-0 flex items-center justify-center text-center text-stone-500">
                                        <p>Adjust wrist size and pattern to see a preview.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="lg:col-span-1 p-4 bg-[var(--c-surface)] rounded-lg border border-[var(--c-builder-separator)] h-full self-stretch flex flex-col">
                            <h4 className="text-lg font-bold mb-3 text-center text-[var(--c-heading)]">Design Specifications</h4>
                             {finalBeads.length > 0 ? (
                                <>
                                    <div className="space-y-2 text-sm flex-grow">
                                        <div className="flex justify-between"><span>Wrist Size:</span> <strong className="text-[var(--c-accent-primary)]">{wristSize.toFixed(1)} cm</strong></div>
                                        <div className="flex justify-between"><span>Total Beads:</span> <strong>{summary.beadCount}</strong></div>
                                        <div className="flex justify-between"><span>Est. Weight:</span> <strong>{summary.totalWeight.toFixed(2)} g</strong></div>
                                        <div className="mt-2 pt-2 border-t">
                                            <p className="font-semibold mb-1">Bead Composition:</p>
                                            <ul className="space-y-1 text-xs max-h-40 overflow-y-auto pr-2">
                                                {beadComposition.map(bead => (
                                                    <li key={`${bead.colorName}-${bead.size}`} className="flex justify-between items-center">
                                                        <span>{bead.colorName} ({bead.size.toFixed(2)}mm)</span>
                                                        <strong>x {bead.count}</strong>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t-2 border-dashed">
                                        <div className="flex justify-between items-baseline">
                                            <span className="font-semibold text-base">Estimated Price:</span>
                                            <strong className="text-2xl font-bold text-[var(--c-heading)]">{formatCurrency(summary.totalPrice)}</strong>
                                        </div>
                                    </div>
                                </>
                             ) : <p className="text-center text-sm text-stone-500 flex-grow flex items-center justify-center">Details will appear here.</p>}
                        </div>
                    </div>
                </div>
            </div>

             {/* --- Actions --- */}
            <div className="mt-8 space-y-3">
                <button onClick={() => handleAction('capture')} className="w-full bg-[var(--c-accent-secondary)] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg disabled:bg-stone-400/80 disabled:cursor-not-allowed transition-all" disabled={finalBeads.length <= 0 || isProcessing}>
                    {isProcessing ? 'Processing...' : "Capture Design"}
                </button>
                 <button onClick={() => handleAction('submit')} className="w-full btn-primary text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg disabled:bg-stone-400 disabled:cursor-not-allowed transition-all" disabled={finalBeads.length <= 0 || isProcessing}>
                    {isProcessing ? 'Processing...' : "Submit Design for Pre-Order"}
                </button>
            </div>
        </div>
    );
};

export default BraceletBuilder;