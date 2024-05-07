import React, { ReactNode } from "react"
import { cn } from '../../../lib/utils'

interface titleSectionProps {
    className?: string
    children:ReactNode
    href: string
}
export const SocialButton = ({  className,children,href }: titleSectionProps) => {
    return (

        <a className={cn('size-12 rounded-full bg-lime-primary text-black flex justify-center items-center hover:opacity-85 ', className)} href={href}>
            {children}
        </a>
        
    )
}