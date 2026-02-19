import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ImageCarousel } from './ImageCarousel';

interface ProjectCardProps {
    title: string;
    bullets: string[];
    tags: string[];
    link: string;
    images?: string[];
}

export const ProjectCard = ({ title, bullets, tags, images }: ProjectCardProps) => {
    const { ref, className } = useReveal<HTMLDivElement>(0.1);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    const hasImages = images && images.length > 0;

    return (
        <>
            <div
                ref={ref}
                className={`block group md:grid md:grid-cols-12 md:gap-8 py-10 border-b border-border/10 last:border-0 transition-all duration-500 ${className}`}
            >
                {/* Image Section */}
                <div className="md:col-span-4 mb-6 md:mb-0">
                    {hasImages ? (
                        <div
                            onClick={() => setIsCarouselOpen(true)}
                            className="relative overflow-hidden rounded-lg aspect-video cursor-pointer bg-muted/10 border border-border/10 group-hover:border-accent/20 transition-all"
                        >
                            <img
                                src={images[0]}
                                alt={`${title} preview`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {images.length > 1 && (
                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded-full font-mono">
                                    +{images.length - 1}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="relative overflow-hidden rounded-lg aspect-video bg-muted/10 border border-border/10">
                            <div className="w-full h-full flex items-center justify-center text-muted/20 text-xs uppercase tracking-widest font-mono">
                                <span>No Image</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="md:col-span-8 flex flex-col justify-center">
                    <div className="mb-4">
                        <div className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                            <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors flex items-center gap-3">
                                {title}
                            </h3>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0"></span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Carousel */}
            {hasImages && (
                <ImageCarousel
                    images={images}
                    isOpen={isCarouselOpen}
                    onClose={() => setIsCarouselOpen(false)}
                />
            )}
        </>
    );
};
