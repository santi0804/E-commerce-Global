import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCarContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import './style.css';


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCarContext);
    console.log('CART: ', context.cartProducts)

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
            <div className="px-6">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imagenUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>

        </aside>
    )
}

export default CheckoutSideMenu;
