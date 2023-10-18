
import { useEffect, useState } from "react";
import Header from "./Component/Header/Header";
import MedicineForm from "./Component/Medicines/MedicineForms";
import MedicineList from "./Component/Medicines/MedicineList";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [medicineList , setMedicineList] = useState([]);
  const [showCart,setShowCart]=useState(false)


  useEffect(() => {
    const storedProducts = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setMedicineList(storedProducts);
  },[]);

  const AddItemHandler = (MedicineDetails) => {
    setMedicineList((prevList) => {
      return [...prevList,MedicineDetails ]
    })
  }
  const updateMedicineList = (updatedList) => {
    setMedicineList(updatedList);
}

 const showCartHandler =() => {
  setShowCart(true)
 }

 const hideCartHandler = () => {
  setShowCart(false)
 }

  return (
    <div>
      <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <MedicineForm onAddItem={AddItemHandler}/>
      <MedicineList medicines={medicineList} updateMedicineList={updateMedicineList} />
      </CartProvider>
    </div>
  );
}

export default App;