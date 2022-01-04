import React from "react";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name} <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> X
      {quantity} <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i> ={" "}
      {price * quantity} Руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
