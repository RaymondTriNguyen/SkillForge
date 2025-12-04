import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-md overflow-hidden';
  const hoverStyles = hover
    ? 'cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
