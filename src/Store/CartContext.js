import React from "react"

const CartContext=React.createContext({
    medicines:[],
    addItem:(item) => {},
    
})

export default CartContext