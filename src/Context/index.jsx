import { createContext, useState } from "react";

export const ShoppingCarContext = createContext()

export const ShoppinCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // product detail - Show product
    const [productToShwow, setProductToShow] = useState({});  // Se le asigna un Objeto vacio

    // Shopping cart - Add productos to cart
    const [cartProducts, setCartProducts] = useState([]);


    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShwow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCarContext.Provider>

    )
}
