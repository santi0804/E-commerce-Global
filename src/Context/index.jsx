import { createContext, useState } from "react";

export const ShoppingCarContext = createContext();

export const ShoppinCartProvider = ({ children }) => {

    //Shopping Cart-Incrementquantity
    const [count, setCount] = useState(0);

    // Product Detail-Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail-Show product
    const [productToShow, setProductToShow] = useState({});  // Se le asigna un Objeto vacio

    // Shopping Cart- Add products to cart
    const [cartProducts, setCartProducts] = useState([]);


    return (
        <ShoppingCarContext.Provider
            value={{
                count,                   // Contador del carrito
                setCount,                // Función para actualizar el contador
                openProductDetail,       // Función para abrir el detalle
                closeProductDetail,      // Función para cerrar el detalle
                isProductDetailOpen,     // Funcion para leer o visualizar
                productToShow,           // Producto seleccionado
                setProductToShow,        // Función para actualizar el producto
                cartProducts,            // Lista de productos en el carrito
                setCartProducts,         // Función para actualizar el carrito
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu
            }}>
            {children}
        </ShoppingCarContext.Provider>

    )
}
