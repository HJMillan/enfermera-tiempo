import type { InputHTMLAttributes, Ref } from 'react'
import { cn } from '@/lib/cn'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  ref?: Ref<HTMLInputElement>
}

export function TextField({ label, error, id, className, ref, ...props }: TextFieldProps) {
  const fieldId = id ?? props.name
  const errorId = error && fieldId ? `${fieldId}-error` : undefined

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1 block font-bold text-ink">
        {label}
      </label>
      <input
        ref={ref}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          'min-h-11 w-full rounded-md border border-line bg-surface px-3 text-base text-ink',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surf',
          error && 'border-twilight',
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-twilight">
          {error}
        </p>
      ) : null}
    </div>
  )
}
