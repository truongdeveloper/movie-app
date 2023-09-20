import { CSSProperties, MouseEvent, ReactElement } from "react"

export interface ITextCustom {
    style?: CSSProperties,
    className?: string,
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    textSM?: boolean,
    colorLinear?: boolean,
    color?: string,
    sx?: object,
    children: React.ReactNode
}