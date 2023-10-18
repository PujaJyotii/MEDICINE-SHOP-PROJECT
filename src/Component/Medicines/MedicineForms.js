import { useState } from "react"
import Card from "../../UI/Card"
import classes from './MedicineForm.module.css'

const MedicineForm = (props) => {
  const [medicineName , setMedicineName] = useState('');
  const [description ,setDescription] = useState('');
  const [price ,setPrice] =useState('');
  const [quantity,setQuantity] = useState('');



const SubmitHandler = (event) => {
    event.preventDefault();
    if(medicineName.length === 0 || description.length === 0 || price.length === 0 || quantity.length ===0)
{
    return
}
    const medicineItem = {
        name:medicineName,
        description:description,
        price:price,
        quantity:quantity
    }
    
    localStorage.setItem(medicineItem.name,JSON.stringify(medicineItem))

props.onAddItem(medicineItem)
    setMedicineName('');
    setDescription('');
    setPrice('');
    setQuantity('');

}
const nameChangeHandler = (event) => {
    setMedicineName(event.target.value)
}

const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
}

const priceChangeHandler = (event) => {
    setPrice(event.target.value)
}

const quantityChangeHandler = (event) => {
    setQuantity(event.target.value)
}

return (
    <Card className={classes.input}>
    <form onSubmit={SubmitHandler}>
        <label>Medicine Name</label>
        <input type="text" value={medicineName} onChange={nameChangeHandler}/>
        <label>Description</label>
        <input type="text" value={description} onChange={descriptionChangeHandler}/>
        <label>Price</label>
        <input type="Number" value={price} onChange={priceChangeHandler} />
        <label>Quantity Available</label>
        <input type="Number" value={quantity} onChange={quantityChangeHandler}/>
        <button  className={classes.button} type="submit">Add Product</button>
        
    </form>
    </Card>
)
}

export default MedicineForm