import React, { CSSProperties, Dispatch, MouseEvent, ReactElement } from "react"

export interface ITabsCustom {
    style?: CSSProperties,
    className?: string,
    listTabs: ListTabs[],
    orientation?: "horizontal" | "vertical" | undefined,
    value: number,
    setValue: Dispatch<React.SetStateAction<number>>,
}

export type ListTabs = {
    title: string,
    value: number,
    icon?: string | ReactElement | undefined,
}