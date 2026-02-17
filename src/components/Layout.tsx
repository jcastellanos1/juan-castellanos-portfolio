import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/20">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 pt-36 pb-32">
                {children}
            </main>
        </div>
    );
};
