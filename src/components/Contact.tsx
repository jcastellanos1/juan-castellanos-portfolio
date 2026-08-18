import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';
import { Section } from './Section';
import { useLanguage } from '../context/LanguageContext';
import { SiGithub } from 'react-icons/si';

export const Contact = () => {
    const { ref, className } = useReveal(0.1);
    const { t } = useLanguage();
    const formRef = useRef<HTMLFormElement>(null);
    const submissionLock = useRef(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (submissionLock.current) return;

        const form = event.currentTarget;
        const data = new FormData(form);
        const fromName = String(data.get('from_name') ?? '').trim();
        const fromEmail = String(data.get('from_email') ?? '').trim();
        const subject = String(data.get('subject') ?? '').trim();
        const message = String(data.get('message') ?? '').trim();
        const website = String(data.get('website') ?? '').trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setStatus(null);

        if (!fromName || !fromEmail || !subject || !message) {
            setStatus({ type: 'error', message: t.contact.form.requiredError });
            form.reportValidity();
            return;
        }

        if (!emailPattern.test(fromEmail)) {
            setStatus({ type: 'error', message: t.contact.form.emailError });
            form.elements.namedItem('from_email') instanceof HTMLInputElement
                && form.elements.namedItem('from_email')?.focus();
            return;
        }

        // Bots commonly fill hidden fields. Silently accept without sending.
        if (website) {
            form.reset();
            setStatus({ type: 'success', message: t.contact.form.success });
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({ type: 'error', message: t.contact.form.configError });
            return;
        }

        submissionLock.current = true;
        setIsSubmitting(true);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                { from_name: fromName, from_email: fromEmail, subject, message },
                { publicKey },
            );
            formRef.current?.reset();
            setStatus({ type: 'success', message: t.contact.form.success });
        } catch {
            setStatus({ type: 'error', message: t.contact.form.sendError });
        } finally {
            submissionLock.current = false;
            setIsSubmitting(false);
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

                <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mb-8" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label htmlFor="from_name" className="block text-sm font-medium text-text mb-2">{t.contact.form.name}</label>
                            <input id="from_name" name="from_name" type="text" required autoComplete="name" className="contact-field" />
                        </div>
                        <div>
                            <label htmlFor="from_email" className="block text-sm font-medium text-text mb-2">{t.contact.form.email}</label>
                            <input id="from_email" name="from_email" type="email" required autoComplete="email" inputMode="email" className="contact-field" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">{t.contact.form.subject}</label>
                        <input id="subject" name="subject" type="text" required autoComplete="off" className="contact-field" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">{t.contact.form.message}</label>
                        <textarea id="message" name="message" required rows={6} className="contact-field resize-y min-h-36" />
                    </div>
                    <div className="honeypot" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60">
                        {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                    </button>
                    <div aria-live="polite" aria-atomic="true" className="min-h-6 mt-4">
                        {status && (
                            <p className={`text-sm ${status.type === 'success' ? 'text-accent' : 'text-red-400'}`}>
                                {status.message}
                            </p>
                        )}
                    </div>
                </form>

                {/* Email (small, muted) */}
                <p className="text-sm text-muted/60 mb-8 font-mono">
                    {t.contact.form.alternative}{' '}
                    <a href={`mailto:${t.contact.details.email}`} className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors duration-300">
                        {t.contact.details.email}
                    </a>
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
