
import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/CartContext'

const HeaderCartButton = (props) => {
 const authCtx = useContext(CartContext);
 const totalAmount = authCtx.medicines.reduce((preVal,item) => (
  preVal+  parseInt(item.amount)
 ),0)
  return (
    <button className={classes.button} onClick={props.onShow}>
   <span className={classes.icon}><CartIcon/></span>
   <span>Cart</span>
   <span className={classes.badge}>{totalAmount}</span>

    </button>
)
}

export default HeaderCartButton