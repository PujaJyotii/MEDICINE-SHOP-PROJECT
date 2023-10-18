import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../../UI/Modal"
import classes from './Cart.module.css'
import CartItem from "./CartItem";

const Cart = (props) => {
    const authCtx=useContext(CartContext)

    let multiplyItemsandPrice = 0;
    for (const medicines of authCtx.medicines) {
      multiplyItemsandPrice += +medicines.price * medicines.amount;
    }
    const hasItems = authCtx.medicines.length>0

   
    const cartItemAddHandler = item => {
        authCtx.addItem({...item,amount:1})
    }

    const cartItems=(
    <ul className={classes['cart-items']}>
        {authCtx.medicines.map((item) => (
            <CartItem  key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            
            onAdd={cartItemAddHandler.bind(null,item)}/>
        ))}

    </ul>
    )

    return(
        <Modal onClose={props.onClose}>
            {cartItems}
          <div className={classes.total}>
        <span>Total Amount</span>
        <span>{multiplyItemsandPrice}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button} >Order</button>}
         </div>
        </Modal>
    ) 
}
export default Cart