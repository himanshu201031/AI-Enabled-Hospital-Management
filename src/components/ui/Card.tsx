import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`bg-white shadow-sm border border-gray-100 rounded-xl p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
