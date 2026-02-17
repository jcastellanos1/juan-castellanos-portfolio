import { Container } from '../components/Container';
import { Heading, Text } from '../components/Typography';
import { ProjectCaseStudy } from '../components/ProjectCaseStudy';
import { useLanguage } from '../context/LanguageContext';

export const Systems = () => {
    const { t } = useLanguage();

    return (
        <section id="systems" className="py-20 bg-background">
            <Container className="mb-16">
                <Heading level={2} className="mb-4">
                    {t.systems.title} <span className="text-secondary">{t.systems.title_highlight}</span>
                </Heading>
                <Text size="lg" className="max-w-2xl text-secondary">
                    {t.systems.description}
                </Text>
            </Container>

            <div>
                {t.projects.map((project, index) => (
                    <ProjectCaseStudy
                        key={index}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};
