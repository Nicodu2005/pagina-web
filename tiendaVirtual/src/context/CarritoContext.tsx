import type {CartItems,CartContextType} from "../interfaces/cart";
import type { CartProviderProps } from "../interfaces/ContexrCart";
import { useState } from "react";
import {cartContext} from "../interfaces/ContexrCart";

function CartProvider({children}: CartProviderProps){
    const [items, setItems] = useState<CartItems[]>([]);



return(
    <cartContext.Provider value={items}>
        {children}
    </cartContext.Provider>
)
}

export default CartProvider;