import clsx from 'clsx';
import React from 'react';
import Spinner from '../icons/spinner';

type ButtonProps = {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  isLoading = false,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'text-small-regular flex min-h-[50px] w-full items-center justify-center border px-5 py-[10px] uppercase transition-colors duration-200 disabled:opacity-50',
        {
          'border-gray-900 bg-gray-900 text-white hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white':
            variant === 'primary',
          'border-gray-920 bg-transparent text-gray-900 hover:bg-gray-100': variant === 'secondary'
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
