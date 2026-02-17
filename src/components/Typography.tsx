
import { cn } from '../utils/cn';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4;
}

export const Heading = ({ className, children, level = 1, ...props }: HeadingProps) => {
    const baseStyles = "font-bold tracking-tight text-primary shadow-sm"; // Added shadow-sm for subtle depth if needed, or remove for flat

    const sizes = {
        1: "text-5xl sm:text-6xl lg:text-7xl leading-[1.1]",
        2: "text-3xl sm:text-4xl lg:text-5xl leading-tight",
        3: "text-2xl sm:text-3xl leading-snug",
        4: "text-xl sm:text-2xl leading-snug",
    };

    const Component = `h${level}` as any;

    return (
        <Component
            className={cn(baseStyles, sizes[level], className)}
            {...props}
        >
            {children}
        </Component>
    );
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    size?: 'sm' | 'base' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'muted';
}

export const Text = ({ className, children, size = 'base', variant = 'secondary', ...props }: TextProps) => {
    const sizes = {
        sm: "text-sm leading-relaxed",
        base: "text-base leading-relaxed",
        lg: "text-lg leading-relaxed",
        xl: "text-xl leading-relaxed",
    };

    const variants = {
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-gray-500",
    };

    return (
        <p
            className={cn(sizes[size], variants[variant], className)}
            {...props}
        >
            {children}
        </p>
    );
};
