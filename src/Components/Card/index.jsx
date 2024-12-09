import { PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCarContext)  // este es el estado global

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setproductToShow(productDetail)
    }

    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60"
        onClick={() => showProduct(data.data)} > {/*Este cambia el estado*/}
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 round-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />  {/*Con esta linea podemos traer las imagenes para cada card diferente */}
                <div
                    className="absolute top-0  right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={() => context.setCount(context.count + 1)}>
                    <PlusIcon className="size-6 text-black"></PlusIcon>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>  {/*Nombre de la categortia de productos */}
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;