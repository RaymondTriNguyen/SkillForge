import { ReactNode } from 'react';
import { Difficulty, Category } from '../types';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'difficulty' | 'category';
  difficulty?: Difficulty;
  category?: Category;
}

export function Badge({ children, variant = 'default', difficulty, category }: BadgeProps) {
  const baseStyles = 'inline-block px-3 py-1 text-xs font-semibold rounded-full';

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  const categoryColors = {
    programming: 'bg-blue-100 text-blue-800',
    cloud: 'bg-sky-100 text-sky-800',
    devops: 'bg-orange-100 text-orange-800',
    data: 'bg-teal-100 text-teal-800',
    design: 'bg-pink-100 text-pink-800',
    security: 'bg-red-100 text-red-800',
  };

  let colorClass = 'bg-gray-100 text-gray-800';

  if (variant === 'difficulty' && difficulty) {
    colorClass = difficultyColors[difficulty];
  } else if (variant === 'category' && category) {
    colorClass = categoryColors[category];
  }

  return (
    <span className={`${baseStyles} ${colorClass}`}>
      {children}
    </span>
  );
}
