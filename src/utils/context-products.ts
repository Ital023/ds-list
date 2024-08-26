import { createContext } from "react"

export type ContextProductCountType = {
    contextProductsCount: number,
    setContextProductsCount: (contextProductsCount: number) => void
}

export const ContextProductsCount = createContext<ContextProductCountType>({
    contextProductsCount: 0,
    setContextProductsCount: () => {}
});