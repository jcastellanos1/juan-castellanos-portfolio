import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard'; // To be updated
import { SkillGroup } from './components/SkillGroup'; // To be updated
import { useLanguage } from './context/LanguageContext';

function App() {
    const { t } = useLanguage();

    return (
        <Layout>
            <Hero />
            <About />

            {/* Experience Section */}
            <Section id="experience" className="mb-40 lg:mb-56">
                <h2 className="text-3xl md:text-4xl font-bold mb-20">{t.experience.title}</h2>
                <div className="space-y-24 border-l border-border/40 ml-3 pl-8 md:pl-12 relative">
                    {t.experience.jobs.map((job, index) => (
                        <ExperienceItem
                            key={index}
                            date={job.date}
                            title={job.title}
                            company={job.company}
                            description={job.description}
                            bullets={job.bullets}
                        />
                    ))}
                </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="mb-40 lg:mb-56">
                <h2 className="text-3xl md:text-4xl font-bold mb-20">{t.projects.title}</h2>
                <div className="space-y-16">
                    {t.projects.list.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            bullets={project.bullets}
                            tags={project.tags}
                            link={project.link}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </Section>

            {/* Skills Section */}
            <Section id="skills" className="mb-40 lg:mb-56">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.skills.title}</h2>

                {/* Skills Summary List - From CV 'Habilidades' bullets */}
                <div className="mb-16">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.skills.list.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted text-lg leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools & Tech Grid - From CV Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillGroup
                        category="Languages"
                        skills={t.skills.tools.languages}
                    />
                    <SkillGroup
                        category="Frameworks/Libs"
                        skills={t.skills.tools.frameworks}
                    />
                    <SkillGroup
                        category="Databases"
                        skills={t.skills.tools.databases}
                    />
                    <SkillGroup
                        category="DevOps/Infra"
                        skills={t.skills.tools.devops}
                    />
                </div>
            </Section>


            {/* Languages Section */}
            <Section id="languages" className="mb-40 lg:mb-56">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.languages.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                    {t.languages.items.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border border-border/40 rounded-lg bg-muted/5">
                            <span className="font-medium text-text">{lang.name}</span>
                            <span className="text-accent text-sm font-mono">{lang.level}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="mb-20">
                <div className="text-center py-20 border-t border-border/40">
                    <h2 className="text-3xl font-bold text-text mb-8">{t.contact.title}</h2>
                    <a
                        href="mailto:jcastellanos@example.com"
                        className="inline-block px-8 py-3 bg-text text-black font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                    >
                        {t.contact.cta}
                    </a>
                </div>
            </Section>

            <footer className="text-center text-xs text-muted/30 pb-8 font-mono">
                <p>{t.footer.text}</p>
            </footer>

        </Layout >
    );
}

export default App;
