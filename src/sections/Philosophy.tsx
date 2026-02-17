import { Container } from '../components/Container';
import { Heading, Text } from '../components/Typography';
import { Code2, Database, Globe, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Philosophy = () => {
    const { t } = useLanguage();

    const icons = [
        <Layers size={32} />,
        <Code2 size={32} />,
        <Database size={32} />,
        <Globe size={32} />
    ];

    return (
        <section className="py-24 bg-surface/30 border-y border-border/50">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-4">
                        <Heading level={2} className="mb-6 sticky top-24">
                            {t.philosophy.title}
                        </Heading>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.philosophy.principles.map((principle, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors duration-300 group"
                            >
                                <div className="mb-4 text-secondary group-hover:text-accent transition-colors duration-300">
                                    {icons[index]}
                                </div>
                                <Heading level={3} className="text-xl mb-3">{principle.title}</Heading>
                                <Text size="sm">{principle.description}</Text>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
};
