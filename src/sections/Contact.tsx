import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Heading, Text } from '../components/Typography';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-background text-center">
            <Container>
                <div className="max-w-3xl mx-auto space-y-8">
                    <Heading level={2}>{t.contact.title}</Heading>
                    <Text size="xl" className="text-secondary">
                        {t.contact.description}
                    </Text>

                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" icon={<Mail size={20} />} onClick={() => window.location.href = 'mailto:hello@example.com'}>
                            {t.contact.cta}
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6 pt-16 border-t border-border/30 mt-16 text-secondary">
                        <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                    </div>

                    <Text size="sm" className="text-secondary/50 pt-8">
                        © {new Date().getFullYear()} {t.contact.footer}
                    </Text>

                </div>
            </Container>
        </section>
    );
};
