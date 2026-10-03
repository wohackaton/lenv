import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', loading, children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-400 active:scale-[0.98]',
    secondary: 'border-2 border-teal-500 text-teal-500 hover:bg-mint-50 active:scale-[0.98]'
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} disabled={loading} {...props}>
      {loading && <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
      {children}
    </button>
  )
}
