import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
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
                    ? 'bg-bg/80 backdrop-blur-md border-border/40 py-4'
                    : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 text-sm flex justify-between items-center">
                <a
                    href="#"
                    onClick={(e) => scrollToSection(e, 'top')}
                    className="font-bold text-xl tracking-tighter hover:text-accent transition-colors duration-300"
                >
                    &lt;jc /&gt;
                </a>

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
                    <div className="pl-4 border-l border-border/40">
                        <LanguageToggle />
                    </div>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <LanguageToggle />
                    {/* Mobile Menu Placeholder */}
                    <button className="text-muted hover:text-text transition-colors">
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    );
};
