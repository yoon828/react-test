import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Products } from './Products';

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItem(orderType)
  }, [orderType])

  const loadItem = async (orderType) => {
    try {
      let res = await axios.get(`http://localhost:5000/${orderType}`)
      setItems(res.data)
    } catch (error) {
      console.error(error);
    }
  }

  const ItemComponent = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => {
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath} />
  })

  return (
    <div>{optionItems}</div>
  )
}

export default Type