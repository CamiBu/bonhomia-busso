import React, { createContext, useState } from 'react'


export const ShopContext = createContext()

const { Provider } = ShopContext

const ContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const onAdd = (ItemQ) => {
        setCarrito([...carrito, ItemQ])
    }

    return (
        <Provider value={{ onAdd, carrito, setCarrito }}>
            {children}
        </Provider>

    )
}

export default ContextProvider 