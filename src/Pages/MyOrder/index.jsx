import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";


function MyOrder() {
    const context = useContext(ShoppingCartContext);

    return (
        
        <Layout>
            MyOrder
            <div className="flex flex-col w-80">  {/*Con el flex-1 nos posiciona el boton en la parte de abajo */}
                {
                    context.order?.slice(-1)[0].products.map(product => (  
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imagenUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}
export default MyOrder;