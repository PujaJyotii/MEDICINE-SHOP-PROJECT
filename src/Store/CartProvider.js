import React from "react";
import {  useEffect, useState } from "react"
import CartContext from "./CartContext"
import axios from "axios";


    const CartProvider = (props) => {

const [items,setItems]=useState([])

async function addItemHandler(item) {
    
    const IndexofItem = items.findIndex((ind) => {
      return ind.name === item.name;
    });
    if (IndexofItem === -1) {
      try {
        let response = await axios.post(
          'https://crudcrud.com/api/5929184f874f4ddbb1562c584d0f7c1f/cart',
          item,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response;
        response = response.data;
        setItems((prev) => {
          return [...prev, response];
        });
      } catch (err) {
        console.log("the error is", err);
      }
    } else {
      const copyItems = [...items];
      copyItems[IndexofItem].amount += 1;
      setItems(copyItems);
      try {
        let response = await axios.put(
          `https://crudcrud.com/api/5929184f874f4ddbb1562c584d0f7c1f/cart/${copyItems[IndexofItem]._id}`,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            amount: item.amount + 1,
            
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(`the error is ${err}`);
      }
    }
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('https://crudcrud.com/api/5929184f874f4ddbb1562c584d0f7c1f/cart', {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const fetchedItems = response.data;
        setItems(fetchedItems);
      } catch (err) {
        console.log("Error fetching item:", err);
      }
    }

    fetchItems();
  }, []); 
  
    const cartcontext={
        medicines:items,
        addItem:addItemHandler,
       }



    return (
        <CartContext.Provider value={cartcontext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider