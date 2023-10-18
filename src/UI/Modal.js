import   { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'



const Backdrop =(props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const Overlay = (props) => {
    return(
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const parentEle = document.getElementById('overlay')
const Modal =(props) => {
return (<Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/> ,parentEle)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,parentEle)}
    </Fragment>
)
}

export default Modal