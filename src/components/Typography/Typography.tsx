import classes from '*.module.css';
import clsx from 'clsx';
import { FC } from 'react';

type TypographyProps = {
    align?: 'center' | 'left' | 'right';
    className?: string;
    variant: 'sectionTitle';
};

const alignment = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
};

const Typography: FC<TypographyProps> = ({
    align = 'center',
    children,
    className,
    variant,
}) => {
    const variantClassNames = {
        sectionTitle: 'font-sanchez text-3xl md:text-5xl capitalize',
    };

    return (
        <div
            className={clsx(
                'w-full py-4 md:py-8 relative',
                alignment[align],
                variantClassNames[variant],
                variant === 'sectionTitle' && 'highlight',
                className
            )}
        >
            {children}
            <style jsx>{`
                .highlight:before {
                    content: '';
                    position: absolute;
                    width: 64px;
                    height: 3px;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #3b3b96;
                }
            `}</style>
        </div>
    );
};

export default Typography;
