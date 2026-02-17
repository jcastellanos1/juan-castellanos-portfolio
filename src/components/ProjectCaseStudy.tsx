
import { Container } from './Container';
import { Heading, Text } from './Typography';
import { Badge } from './Badge';
import { ExternalLink, Github, Layers, Server, Database } from 'lucide-react';
import { Button } from './Button';

interface ProjectCaseStudyProps {
    title: string;
    subtitle: string;
    problem: string;
    architecture: string;
    techStack: string[];
    features: string[];
    imageUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
    index: number;
}

export const ProjectCaseStudy = ({
    title,
    subtitle,
    problem,
    architecture,
    techStack,
    features,
    imageUrl,
    demoUrl,
    repoUrl,
    index
}: ProjectCaseStudyProps) => {
    const isEven = index % 2 === 0;

    return (
        <div className="py-24 border-b border-border/40 last:border-0">
            <Container>
                <div className={`flex flex-col lg:gap-16 gap-10 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-accent font-mono text-sm tracking-wider uppercase">
                                <span>0{index + 1}</span>
                                <span className="h-px w-8 bg-accent/50"></span>
                                <span>Case Study</span>
                            </div>
                            <Heading level={2}>{title}</Heading>
                            <Text size="xl" className="text-white">{subtitle}</Text>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <Heading level={4} className="mb-2 flex items-center gap-2">
                                    <span className="text-secondary text-base font-normal">The Challenge</span>
                                </Heading>
                                <Text>{problem}</Text>
                            </div>

                            <div>
                                <Heading level={4} className="mb-2 flex items-center gap-2">
                                    <Layers size={18} className="text-accent" />
                                    <span>Architecture</span>
                                </Heading>
                                <Text>{architecture}</Text>
                            </div>

                            <div>
                                <Heading level={4} className="mb-2 flex items-center gap-2">
                                    <Server size={18} className="text-accent" />
                                    <span>Key Features</span>
                                </Heading>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-secondary text-sm">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {techStack.map((tech) => (
                                <Badge key={tech} variant="outline">{tech}</Badge>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            {demoUrl && (
                                <Button variant="outline" size="sm" icon={<ExternalLink size={16} />} onClick={() => window.open(demoUrl, '_blank')}>
                                    Live Demo
                                </Button>
                            )}
                            {repoUrl && (
                                <Button variant="ghost" size="sm" icon={<Github size={16} />} onClick={() => window.open(repoUrl, '_blank')}>
                                    Source Code
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Visual Side - Abstract or Screenshot placeholder */}
                    <div className="flex-1">
                        <div className="relative h-full min-h-[400px] w-full bg-surface/30 rounded-lg border border-border overflow-hidden group">
                            {/* Checkered pattern background */}
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>

                            {imageUrl ? (
                                <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Database size={64} className="text-border group-hover:text-accent/50 transition-colors duration-500" />
                                </div>
                            )}

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};
