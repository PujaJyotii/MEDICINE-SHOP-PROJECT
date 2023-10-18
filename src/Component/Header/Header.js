import { Fragment } from 'react'
import medicine from '../../assests/medicine.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
    return(
        <Fragment>
     <header className={classes.header}>
        <h1>Medicine Shop</h1>
         <HeaderCartButton onShow={props.onShowCart}/>
         
     </header>
     <div className={classes['main-image']}>
     <img src={medicine} alt="Medicine "/>
     </div>
     </Fragment>
    )
}
export default Header