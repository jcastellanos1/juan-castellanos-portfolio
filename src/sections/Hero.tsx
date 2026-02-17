import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Heading, Text } from '../components/Typography';
import { Badge } from '../components/Badge';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background decoration - Asymmetrical glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Main Content - Takes up 8 columns for asymmetry */}
                    <div className="lg:col-span-8 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
                        <div className="flex flex-wrap gap-3 animate-fade-in-up justify-center lg:justify-start">
                            <Badge variant="outline" className="backdrop-blur-sm bg-surface/30">
                                {t.hero.availability}
                            </Badge>
                            <Badge variant="outline" className="backdrop-blur-sm bg-surface/30">
                                {t.hero.location}
                            </Badge>
                        </div>

                        <div className="space-y-4">
                            <Heading level={1} className="max-w-4xl">
                                {t.hero.title_start} <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                    {t.hero.title_end}
                                </span>
                            </Heading>

                            <Text size="xl" className="max-w-2xl text-secondary mx-auto lg:mx-0">
                                {t.hero.subtitle}
                            </Text>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                            <Button size="lg" icon={<ArrowRight size={18} />} className="w-full sm:w-auto justify-center">
                                {t.hero.view_systems}
                            </Button>
                            <Button variant="secondary" size="lg" icon={<Mail size={18} />} className="w-full sm:w-auto justify-center">
                                {t.hero.contact_me}
                            </Button>
                        </div>
                    </div>

                    {/* Decorative / minimal visual - Takes up 4 columns */}
                    <div className="hidden lg:block lg:col-span-4 relative">
                        <div className="relative border border-border bg-surface/20 backdrop-blur-sm rounded-lg p-6 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                            <div className="space-y-3 font-mono text-sm text-gray-400">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>{t.hero.status}</span>
                                    <span className="text-green-400">{t.hero.active}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>{t.hero.role}</span>
                                    <span className="text-white">{t.hero.role_value}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>{t.hero.stack}</span>
                                    <span className="text-white">[React, Node, Java]</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{t.hero.upt}</span>
                                    <span className="text-blue-400">99.9%</span>
                                </div>
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-white/10 rounded-tr-xl" />
                            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-white/10 rounded-bl-xl" />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};
