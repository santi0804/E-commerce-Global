
const Layout = ({ children }) => {   // Encapsulamos el componente hijo o lo que venga  para mostrar.

    return (

        <div className="flex flex-col items-center mt-20">  {/*Diseños Talwinds*/}
            {children}    
        </div>
    )
}

export default Layout;