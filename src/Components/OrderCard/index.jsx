import { XMarkIcon } from '@heroicons/react/24/solid';


const OrderCard = props => {
    const { id, title, imagenUrl, price, handleDelete } = props

    let renderXMarkIcon

    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
    }

    return (

        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>

                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imagenUrl} alt={title} />
                </figure>

                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderXMarkIcon}   {/*Renderizo el icono con la función de arriba para poder mostrarlos en la pestañas Orders */}
            </div>

        </div>

    )
}

export default OrderCard;