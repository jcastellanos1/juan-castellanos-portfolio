import { Hero } from './sections/Hero';
import { Systems } from './sections/Systems';
import { Philosophy } from './sections/Philosophy';
import { Contact } from './sections/Contact';

import { LanguageProvider } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-background text-primary selection:bg-white/20 font-sans relative">
                <LanguageToggle />
                <main>
                    <Hero />
                    <Systems />
                    <Philosophy />
                    <Contact />
                </main>
            </div>
        </LanguageProvider>
    )
}

export default App;
