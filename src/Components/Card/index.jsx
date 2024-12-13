import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCartContext)  // este es el estado global

    const showProduct = (productDetail) => {       // Esta function activa el detalle en la ventanita.
        context.openProductDetail()                //pendiente por organizar ?   
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])    // Lo que tu ya tienes lo dejes y adicional agregues un nuevo elemento.
        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {

            return (
                <div
                    className="absolute top-0  right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="size-6 text-white"></CheckIcon> {/*Este es el icono Chulito verde con su lògica */}
                </div>
            )

        } else {
            return (
                <div
                    className="absolute top-0  right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className="size-6 text-black"></PlusIcon> {/*Este es el icono + */}
                </div>
            )
        }

    }

    return (

        <div
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProduct(data.data)} > {/*Este cambia el estado*/}
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 round-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />  {/*Con esta linea podemos traer las imagenes para cada card diferente */}
                {renderIcon(data.data.id)}
            </figure>

            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>  {/*Nombre de la categortia de productos */}
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;