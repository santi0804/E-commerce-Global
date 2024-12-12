import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";
import './styles.css';


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);
  
    return (

        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className="size-6 text-black cursor-pointer" 
                    onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div> {/*Funcion para borrar los detalles de la vista con la X */}
            </div>

            <figure className=" px-6">
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.images}  /* SI neceito que me traiga la primera imagen del set de card agrego un arreglo en ceros asi[0]*/
                alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className=" font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className=" font-medium text-md">{context.productToShow.title}</span>
                <span className=" font-light text-sm">{context.productToShow.decription}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;
