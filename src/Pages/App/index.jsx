import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppinCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/my-orders/:id', element: <MyOrder /> }, // Aqui con el id l estamos indicando con ese id viene algo, para que lo identifique.
        { path: '/sign-in', element: <Signin /> },
        { path: '/*', element: <NotFound /> },  //A este Componente se le debe de asignar cualquier otra ruta que no exista

    ])
    return routes
}


const App = () => {
    return (
        <ShoppinCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppinCartProvider>
    )
}
export default App;

