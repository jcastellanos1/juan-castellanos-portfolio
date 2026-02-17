import { Section } from './Section';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
    const { ref: listRef, className: listClass } = useReveal(0.2);
    const { t } = useLanguage();

    const principles = t.about.principles;

    return (
        <Section id="about" className="mb-40 lg:mb-56">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column - Summary */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
                    <p className="text-lg text-muted leading-relaxed mb-6">
                        {t.about.summary1}
                    </p>
                    <p className="text-lg text-muted leading-relaxed">
                        {t.about.summary2}
                    </p>
                </div>

                {/* Right Column - Principles */}
                <div ref={listRef} className={listClass}>
                    <ul className="space-y-8">
                        {principles.map((principle, index) => (
                            <li key={index} className="flex gap-4 group">
                                <span className="text-accent font-mono text-sm pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                    0{index + 1}
                                </span>
                                <span className="text-lg leading-snug">{principle}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};
