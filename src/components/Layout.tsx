import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/20 overflow-x-hidden">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-32 overflow-x-hidden">
                {children}
            </main>
        </div>
    );
};
