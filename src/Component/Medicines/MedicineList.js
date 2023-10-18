import { useContext } from "react";
import Card from "../../UI/Card";
import classes from './MedicineList.module.css'
import CartContext from "../../Store/CartContext";

const MedicineList = (props) => {
    const authCtx = useContext(CartContext)
     

    const AddToCartHandler = (medicine) => {
        if (medicine.quantity > 0) {
            authCtx.addItem({
                id: medicine.name,
                name: medicine.name,
                amount: 1,
                price: medicine.price,
            });

            const updatedMedicinesList = props.medicines.map((med) => {
                if (med.name === medicine.name) {
                    const updatedQuantity = med.quantity - 1;
                    return {
                        ...med,
                        quantity: updatedQuantity,
                        isOutOfStock: updatedQuantity === 0,
                    };
                }
                return med;
            });

            props.updateMedicineList(updatedMedicinesList);

            // Update the quantity in local storage
            const updatedLocalStorage = { ...localStorage };
            updatedLocalStorage[medicine.name] = JSON.stringify({
                ...JSON.parse(localStorage[medicine.name]),
                quantity: medicine.quantity - 1,
            });

            for (const key in updatedLocalStorage) {
                localStorage.setItem(key, updatedLocalStorage[key]);
            }
        }
    };

    

    

            

           
    
return (

<Card className={classes.users}>
        <ul>
            {
                props.medicines.map((medicine) => (
                    <li key={medicine.name}>
                       Name: {medicine.name} - Description: {medicine.description} - 
                       Price: ${medicine.price}- Quantity: {medicine.quantity}
                    
                       {medicine.isOutOfStock ? (
                            <span className={classes.outOfStock}>Out of Stock</span>
                        ) : (
                            <button className={classes.button1} onClick={() => AddToCartHandler(medicine)}>Add to Cart</button>
                        )}
                    
                    </li>
                ))
            }
        </ul>
    </Card>
)
}

export default MedicineList;