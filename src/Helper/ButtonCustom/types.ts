import { CSSProperties, MouseEvent, ReactElement } from "react"

export interface IButtonCustom {
    style?: CSSProperties,
    className?: string,
    iconStart?: ReactElement,
    iconEnd?: ReactElement,
    outline?: boolean,
    btn1?: boolean,
    btn2?: boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode
}