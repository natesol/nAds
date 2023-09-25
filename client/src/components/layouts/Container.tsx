import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva('container mx-auto', {
    variants: {
        size: {
            default: '',
            sm: 'sm:max-w-screen-sm',
            md: 'md:max-w-screen-md',
            lg: 'lg:max-w-screen-lg',
            xl: 'xl:max-w-screen-xl',
            '2xl': '2xl:max-w-screen-2xl',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

export interface ContainerProps extends VariantProps<typeof containerVariants> {
    children?: React.ReactNode;
    className?: string;
}

export const Container = ({ className, size = 'default', children }: ContainerProps) => {
    return <div className={` ${containerVariants({ size, className })}`}>{children}</div>;
};

export default Container;
