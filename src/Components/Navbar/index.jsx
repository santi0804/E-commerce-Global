import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";


const Navbar = () => {

    const context = useContext(ShoppingCarContext)  // este es el estado global, para aplicar el conteo en el carrito
    const activeStyle = "underline underline-offset-4"  // estas son las clases de Tailwinds linea subrayada.


    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">

                <li className="font-semibold text-lg">
                    <NavLink to='/'>Global-Online</NavLink>
                </li>

                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink>
                </li>

                <li>
                    <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle : undefined}>Clothes</NavLink>
                </li>

                <li>
                    <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink>
                </li>

                <li>
                    <NavLink to='/furnitures' className={({ isActive }) => isActive ? activeStyle : undefined}>Furnitures</NavLink>
                </li>

                <li>
                    <NavLink to='/toys' className={({ isActive }) => isActive ? activeStyle : undefined}>Toys</NavLink>
                </li>

                <li>
                    <NavLink to='/others' className={({ isActive }) => isActive ? activeStyle : undefined}>Others</NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="font-semibold text-black/60">  {/* clase al correo*/}
                    bussinesglobales@gmail.com
                </li>

                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink>
                </li>

                <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink>
                </li>

                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>Sign In</NavLink>
                </li>

                <li className="font-semibold">🛒{context.count} Añadir al carrito </li> {/*Con esta linea creamos el conteo en el carrito */}
            </ul>
        </nav>
    )
}
export default Navbar;