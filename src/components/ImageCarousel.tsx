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

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

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

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 overflow-y-auto overflow-x-hidden"
            onClick={onClose}
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
                        className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-[60] p-2 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-sm"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-[60] p-2 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-sm"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </>
            )}

            {/* Scrollable content area */}
            <div className="min-h-screen flex items-center justify-center p-4 md:p-8 py-20">
                <img
                    src={images[currentIndex]}
                    alt={`Project screenshot ${currentIndex + 1}`}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};
