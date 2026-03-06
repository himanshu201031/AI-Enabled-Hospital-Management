import { InputHTMLAttributes, forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block w-full px-4 py-2.5 transition-colors duration-200 outline-none placeholder:text-gray-400 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
