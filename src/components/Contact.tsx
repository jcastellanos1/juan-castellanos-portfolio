import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Section } from './Section';
import { useLanguage } from '../context/LanguageContext';
import { SiGithub } from 'react-icons/si';

export const Contact = () => {
    const { ref, className } = useReveal(0.1);
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(t.contact.details.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <Section id="contact" className="mb-20">
            <div ref={ref} className={`max-w-4xl py-12 sm:py-16 md:py-20 border-t border-border/40 ${className}`}>
                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text mb-4 sm:mb-6 leading-tight">
                    {t.contact.headline}
                </h2>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-muted/80 max-w-2xl mb-8 sm:mb-12 leading-relaxed">
                    {t.contact.subtext}
                </p>

                {/* Copy Button */}
                <button
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-300 mb-4"
                >
                    {t.contact.copyButton}
                </button>

                {/* Copied Confirmation */}
                {copied && (
                    <p className="text-sm text-accent mb-4 transition-opacity duration-300">
                        {t.contact.copiedConfirmation}
                    </p>
                )}

                {/* Email (small, muted) */}
                <p className="text-sm text-muted/60 mb-8 font-mono">
                    {t.contact.details.email}
                </p>

                {/* Links */}
                <div className="flex gap-6 text-sm text-muted/60">
                    <a
                        href="https://github.com/jcastellanos1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
                    >
                        <SiGithub className="w-4 h-4" />
                        <span>GitHub</span>
                    </a>
                    <span>•</span>
                    <span>{t.contact.details.location}</span>
                </div>
            </div>
        </Section>
    );
};
