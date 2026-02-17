import { useReveal } from '../hooks/useReveal';

interface ExperienceItemProps {
    date: string;
    title: string;
    company: string;
    description: string;
    bullets: string[];
}

export const ExperienceItem = ({ date, title, company, description, bullets }: ExperienceItemProps) => {
    const { ref, className } = useReveal(0.1);

    return (
        <div ref={ref} className={`relative pl-8 md:pl-0 ${className}`}>
            {/* Timeline Dot */}
            <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent border-4 border-bg md:left-[-41px] md:top-1.5 z-10 transition-transform duration-300 hover:scale-125"></span>

            <div className="md:grid md:grid-cols-4 md:gap-8">
                <div className="md:col-span-1 mb-2 md:mb-0">
                    <span className="text-sm font-mono text-muted/80 uppercase tracking-wider">{date}</span>
                </div>
                <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-text mb-1">{title}</h3>
                    <p className="text-accent font-medium mb-4">{company}</p>
                    <p className="text-muted mb-8 leading-relaxed">{description}</p>
                    <ul className="space-y-4">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted/90 text-sm">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0"></span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
