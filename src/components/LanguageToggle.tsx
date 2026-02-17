import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/40 hover:border-accent/40 bg-surface/50 text-xs font-mono transition-all duration-300 group"
            aria-label="Toggle Language"
        >
            <span className={`transition-colors duration-300 ${language === 'en' ? 'text-accent font-bold' : 'text-muted'}`}>EN</span>
            <span className="text-border">/</span>
            <span className={`transition-colors duration-300 ${language === 'es' ? 'text-accent font-bold' : 'text-muted'}`}>ES</span>
        </button>
    );
};
