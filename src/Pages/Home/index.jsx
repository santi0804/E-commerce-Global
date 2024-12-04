import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";


function Home() {

    const [items, setItems] = useState(null);  // este es un estado local.

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (

        <Layout>
            Home
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg"> {/*Con esta linea mostramos los productos en columnas diferentes */}
                {
                    items?.map(items => (
                        <Card key={items.id} data={items} />   // Asi renderizamos nuestras cards
                    ))                         // y traemos la peticion de la data con los items desde el componente Card.
                }
            </div>
        </Layout>
    )
}
export default Home;