import { createContext, useState } from "react";

export const ShoppingCarContext = createContext()

export const ShoppinCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // produdct detail - Show product
    const [productToShwow, setproductToShow] = useState({});  // Se le asigna un Objeto vacio


    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShwow,
            setproductToShow
        }}>
            {children}
        </ShoppingCarContext.Provider>

    )
}
