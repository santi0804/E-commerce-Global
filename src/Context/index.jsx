import { createContext, useState } from "react";

export const ShoppingCarContext = createContext()

export const ShoppinCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);


    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCarContext.Provider>

    )
}
