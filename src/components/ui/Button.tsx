import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

const variantClass = {
  primary:
    'bg-teal text-on-primary active:bg-twilight [@media(hover:hover)]:hover:bg-twilight',
  secondary:
    'bg-frost text-ink active:bg-surf [@media(hover:hover)]:hover:bg-surf',
} as const

export function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-md px-4 text-base font-bold',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surf',
        'disabled:opacity-50',
        variantClass[variant],
        className,
      )}
      {...props}
    />
  )
}
