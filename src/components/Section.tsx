import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface SectionProps {
    id?: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
    const { ref, className: revealClass } = useReveal<HTMLElement>(0.1);

    return (
        <section id={id} ref={ref} className={`space-y-8 ${className} ${revealClass}`}>
            {title && (
                <div className="sticky top-0 bg-bg/95 backdrop-blur py-4 z-20 lg:relative lg:top-auto lg:bg-transparent lg:py-0">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted lg:hidden">
                        {title}
                    </h3>
                </div>
            )}
            {children}
        </section>
    );
};
