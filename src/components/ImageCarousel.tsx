import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

export const ImageCarousel = ({ images, isOpen, onClose, initialIndex = 0 }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, currentIndex]);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset touch end
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrevious();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 overflow-hidden flex items-center justify-center p-2 md:p-8"
            onClick={onClose}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Fixed Controls - always visible */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="fixed top-4 right-4 z-[60] p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all backdrop-blur-sm"
                aria-label="Close carousel"
            >
                <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="fixed top-4 left-4 z-[60] px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white/90 font-mono text-xs md:text-sm">
                {currentIndex + 1} / {images.length}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevious();
                        }}
                        className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-[60] p-2 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-sm hidden md:block"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-[60] p-2 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-sm hidden md:block"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </>
            )}

            {/* Image Container - Center and Contain */}
            <div
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
                <img
                    src={images[currentIndex]}
                    alt={`Project screenshot ${currentIndex + 1}`}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};
