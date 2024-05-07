import React, { Children, ReactNode } from "react"
import { cn } from '../../../lib/utils'
interface titleSectionProps {
    children: ReactNode,
    className?: string
    hilight?: boolean
}
export const TitleSection = ({ children, hilight, className }: titleSectionProps) => {
    return (

        <div className={cn('text-center text-2xl font-custom-zenDots ', className)}>
            <h3>
                {children}
            </h3>
            {hilight ?
                <div className="border-b-2 w-4/5 mx-auto border-light-color mt-2"></div>
                : ''
            }

        </div>
    )
}