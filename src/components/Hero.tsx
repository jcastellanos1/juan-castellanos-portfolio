import { useReveal } from '../hooks/useReveal';
import { Section } from './Section';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { ref, className } = useReveal(0.1);
    const { t } = useLanguage();

    return (
        <Section id="about" className="min-h-[85vh] flex items-center">
            <div ref={ref} className={`max-w-3xl ${className}`}>
                <div className="mb-8">
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent border border-accent/20 rounded-full mb-6">
                        {t.hero.badge}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        {t.hero.title}<br />
                        <span className="text-muted">{t.hero.subtitle}</span>
                    </h1>
                    <p className="text-xl text-muted/80 max-w-xl leading-relaxed">
                        {t.hero.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-20">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {t.hero.viewWork}
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-border/60 text-white font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300"
                    >
                        {t.hero.contactMe}
                    </a>
                </div>

                <div className="flex gap-12 text-sm text-muted/60 font-mono">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {t.hero.techStack.backend}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {t.hero.techStack.frontend}
                    </div>
                </div>
            </div>
        </Section>
    );
};
