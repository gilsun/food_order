import MealItemForm from './MealItemForm';
import React from 'react';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
  <li key = {props.id}>
    <div>
      <h3>{props.name}</h3>
      <div>{props.description}</div>
      <div>{price}</div>
    </div>
    <div>
      <MealItemForm />
    </div>

  </li>
  );

}

export default MealItem;