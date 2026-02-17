
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './Button';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="fixed top-4 right-4 z-50">
            <Button
                variant="secondary"
                size="sm"
                onClick={toggleLanguage}
                className="backdrop-blur-md bg-surface/50 border border-border/50 shadow-lg"
                icon={<Globe size={16} />}
            >
                {language === 'en' ? 'ES' : 'EN'}
            </Button>
        </div>
    );
};
