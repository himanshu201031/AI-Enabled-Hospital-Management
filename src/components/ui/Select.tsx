import { SelectHTMLAttributes, forwardRef } from 'react';

const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block w-full px-4 py-2.5 transition-colors duration-200 outline-none appearance-none cursor-pointer ${className}`}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';
export default Select;
