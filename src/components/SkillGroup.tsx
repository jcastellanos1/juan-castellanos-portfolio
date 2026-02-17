import { useReveal } from '../hooks/useReveal';
import { getSkillIcon } from '../utils/skillIcons';

interface SkillGroupProps {
    category: string;
    skills: string[];
}

export const SkillGroup = ({ category, skills }: SkillGroupProps) => {
    const { ref, className } = useReveal(0.1);

    return (
        <div ref={ref} className={className}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-6">{category}</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative px-4 py-2 bg-transparent border border-border/30 rounded-full hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 flex items-center gap-2"
                    >
                        <span className="text-lg text-muted/70 group-hover:text-accent transition-colors">
                            {getSkillIcon(skill)}
                        </span>
                        <span className="text-sm font-medium text-muted/80 group-hover:text-text transition-colors">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
