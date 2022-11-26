import { createContext, useState, useEffect } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
export const newContext = createContext('def');
export function AppContext({ children }) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [shoppingCart, setShoppingCart] = useState([])
    const [open, setOpen] =useState(false);
    const [searchToggel, setSearchToggel] = useState(false)
    const TotlaPrice=[]
    const shoppingCartHandler = (product) => {
        if (shoppingCart.some((cartItem) => cartItem.id === product.id)) {
            setShoppingCart(cart=>
                cart.map(item=>
                    item.id===product.id?{...item,amount:item.amount+1}:item
                )
            )
            return
        }
        setShoppingCart(cart=>[...cart,{...product,amount:1}])
    }
    const shoppingCartRemove =(product,d)=>{
        setShoppingCart((PrevState)=>
        PrevState.flatMap((cart)=> cart.id===product.id?cart.amount+d <1?[]:[{...cart,amount:cart.amount+d}]:[cart])
            
        )
    }
    return (
        <newContext.Provider value={{ products,
         setProducts, 
         error,
          setError,
           shoppingCartHandler,
            shoppingCart,
            shoppingCartRemove,
            TotlaPrice,
            open,
             setOpen,
             searchToggel,
              setSearchToggel }}>
            {children}
        </newContext.Provider>
    )
}
export default AppContext;