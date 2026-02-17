
import { cn } from '../utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <div
            className={cn("max-w-7xl mx-auto px-6 sm:px-8 lg:px-12", className)}
            {...props}
        >
            {children}
        </div>
    );
};
