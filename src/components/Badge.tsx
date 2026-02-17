
import { cn } from '../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: 'default' | 'outline';
}

export const Badge = ({ className, children, variant = 'default', ...props }: BadgeProps) => {
    const variants = {
        default: "bg-surface text-secondary border border-border",
        outline: "bg-transparent text-secondary border border-border"
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors hover:text-primary hover:border-gray-600",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
