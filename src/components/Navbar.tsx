import { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false); // Close mobile menu after navigation
        }
    };

    const links = [
        { name: t.nav.about, href: 'about' },
        { name: t.nav.experience, href: 'experience' },
        { name: t.nav.projects, href: 'projects' },
        { name: t.nav.skills, href: 'skills' },
        { name: t.nav.contact, href: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-bg/80 backdrop-blur-md border-border/40 py-3 md:py-4'
                : 'bg-transparent border-transparent py-4 md:py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm flex justify-between items-center">
                <a
                    href="#"
                    onClick={(e) => scrollToSection(e, 'top')}
                    className="flex items-center hover:opacity-80 transition-opacity duration-300 z-50"
                >
                    <img
                        src="/juan-castellanos-portfolio/logo.svg"
                        alt="JC Logo"
                        className="h-8 md:h-10 w-auto"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`nav-link text-muted hover:text-text transition-colors duration-300 ${activeSection === link.href ? 'text-text active' : ''
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pl-4 border-l border-border/40 flex items-center gap-4">
                        <a
                            href="https://github.com/jcastellanos1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors duration-300"
                            aria-label="GitHub Profile"
                        >
                            <SiGithub className="w-5 h-5" />
                        </a>
                        <LanguageToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3 z-50">
                    <LanguageToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-muted hover:text-text transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-md border-b border-border/40">
                    <div className="px-4 py-6 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={`#${link.href}`}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`block py-2 text-base ${activeSection === link.href
                                    ? 'text-accent font-medium'
                                    : 'text-muted hover:text-text'
                                    } transition-colors duration-300`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-border/40">
                            <a
                                href="https://github.com/jcastellanos1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 py-2 text-muted hover:text-accent transition-colors"
                            >
                                <SiGithub className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
