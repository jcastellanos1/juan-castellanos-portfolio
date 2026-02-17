
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    icon,
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-background hover:bg-white hover:shadow-lg hover:shadow-primary/20",
        secondary: "bg-surface text-primary border border-border hover:border-gray-600 hover:bg-[#252525]",
        outline: "bg-transparent border border-border text-secondary hover:text-primary hover:border-primary",
        ghost: "bg-transparent text-secondary hover:text-primary hover:bg-surface/50"
    };

    const sizes = {
        sm: "text-sm px-3 py-1.5 gap-2",
        md: "text-base px-6 py-3 gap-2",
        lg: "text-lg px-8 py-4 gap-3"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
            {icon && <span className="ml-1">{icon}</span>}
        </button>
    );
};
