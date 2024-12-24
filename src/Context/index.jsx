import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

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
    const [productToShow, setProductToShow] = useState({});  // Se le asigna un Objeto vacio.

    // Shopping Cart- Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart- Order
    const [order, setOrder] = useState([]);  //<== aqui si debe de ser un Array, vacio

    // Get product
    const [items, setItems] = useState(null);  // este era un estado local. desde el Home.
    const [filteredItems, setFilteredItems] = useState(null);

    // Get product by title.
    const [searchByTitle, setsearchByTitle] = useState(null);


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then((data) => setItems(data))
    }, [])

    // Logica para filtrar en el buscador rapido.
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(
            (item) =>
                typeof item.title === "string" &&
                item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])


    return (
        <ShoppingCartContext.Provider
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
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setsearchByTitle,
                filteredItems,
            }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}
