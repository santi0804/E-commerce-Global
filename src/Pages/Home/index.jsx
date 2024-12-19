import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";


function Home() {
    const context = useContext(ShoppingCartContext);

    return (

        <Layout>
            <div className="flex items-center  justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Home</h1>
            </div>
            <input
                type="text"
                placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => event.target.value } />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg"> {/*Con esta linea mostramos los productos en columnas diferentes */}
                {
                    context.items?.map(items => (
                        <Card key={items.id} data={items} />   // Asi renderizamos nuestras cards
                    ))                         // y traemos la peticion de la data con los items desde el componente Card.
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}
export default Home;