import { useContext } from "react";
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import './style.css';


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {  // Este es el objeto que nos arroja la info de la orden de compra.
        const orderToAdd = {
            date: '01.12.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,  // aqui el contexto toma el tamaño.
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]) // con esta linea se setea la orden del objeto.
        context.setCartProducts([])  // Array vacio para limpiar la orden que ya este lista
        context.setsearchByTitle(null)
    }

    return (

        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div>
                    <XMarkIcon className="size-6 text-black cursor-pointer"
                        onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div> {/*Funcion para borrar los detalles de la vista con la X */}
            </div>

            <div className="px-6 overflow-y-scroll flex-1">  {/*Con el flex-1 nos posiciona el boton en la parte de abajo */}
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imagenUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className=" px-6 mb-6">
                <p className=" flex justify-between items-center mb-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'> {/*Con esta linea es hacia donde vamos a necesitar esta redirección */}
                    <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>

            </div>
        </aside>
    )
}

export default CheckoutSideMenu;
