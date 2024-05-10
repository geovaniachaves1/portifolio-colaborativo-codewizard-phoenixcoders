import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "../../../../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children?: ReactNode,
    className?: string
}
export function Button({ children, className }: ButtonProps) {
    return (
        <button className={cn("bg-lime-primary text-light-color-primary  dark:bg-dark-color-secondary w-48 px-4 py-2 rounded hover:opacity-90", className)}>
            {children}
        </button>
    )
}