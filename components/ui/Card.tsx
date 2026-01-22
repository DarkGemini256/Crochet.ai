import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'bordered';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white shadow-md',
    hover: 'bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer',
    bordered: 'bg-white border-2 border-neutral-200',
  };
  
  return (
    <div className={`rounded-lg p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-bold text-neutral-800 ${className}`}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
