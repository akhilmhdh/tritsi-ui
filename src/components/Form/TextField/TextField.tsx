import React from 'react';
import clsx from 'clsx';
import { FormFieldWrapper } from '../FormFieldWrapper';

export type TextFieldProps = {
    error?: boolean;
    onChange?: () => void;
    variant?: 'contained';
    color?: 'primary' | 'secondary';
    placeholder?: string;
    className?: string;
    label?: string;
    helperText?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    name: string;
    type?: 'text' | 'password' | 'number' | 'checkbox';
    rounded?: boolean;
    required?: boolean;
    rows?: number;
    multiline?: boolean;
};

export type Ref = HTMLInputElement | HTMLTextAreaElement;

const TextField = React.forwardRef<Ref, TextFieldProps>(
    (
        {
            className,
            error,
            name,
            onChange,
            variant = 'contained',
            fullWidth = false,
            disabled = false,
            type = 'text',
            rounded = false,
            placeholder,
            label,
            helperText,
            required,
            multiline,
            rows = 3,
        }: TextFieldProps,
        ref
    ) => {
        const TextFieldType = {
            contained: `bg-white placeholder-gray-400 text-gray-700`,
        };

        return (
            <FormFieldWrapper
                label={label}
                helperText={helperText}
                error={error}
            >
                {!multiline ? (
                    <input
                        type={type}
                        onChange={onChange}
                        className={clsx(
                            TextFieldType[variant],
                            'block px-3 py-3 relative rounded text-sm shadow-blue outline-none focus:outline-none focus:ring focus:ring-primary',
                            error && ' ring ring-red-600',
                            fullWidth && 'w-full',
                            disabled && 'bg-opacity-25 bg-gray-400',
                            rounded && 'rounded',
                            className
                        )}
                        ref={ref as React.ForwardedRef<HTMLInputElement>}
                        placeholder={placeholder}
                        disabled={disabled}
                        name={name}
                        required={required}
                    />
                ) : (
                    <textarea
                        onChange={onChange}
                        className={clsx(
                            TextFieldType[variant],
                            'block px-3 py-3 relative rounded text-sm shadow-blue outline-none focus:outline-none focus:ring focus:ring-primary',
                            error && ' ring ring-red-600',
                            fullWidth && 'w-full',
                            disabled && 'bg-opacity-25 bg-gray-400',
                            rounded && 'rounded',
                            className
                        )}
                        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
                        placeholder={placeholder}
                        disabled={disabled}
                        name={name}
                        required={required}
                        rows={rows}
                    />
                )}
            </FormFieldWrapper>
        );
    }
);

TextField.displayName = 'TextField';

export default TextField;
