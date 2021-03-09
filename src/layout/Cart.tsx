import { css } from '@emotion/css';
import {useContext, ChangeEvent, useState, MouseEvent} from 'react';
import {container, textCenter, my1, borderTop, flex, btn, cart} from '../styles/utilities';
import cartContext from '../context/Cart/CartContext';
import {Item} from '../ts_def';

function CartItem({item}: {item: Item}) {
  const CartContext = useContext(cartContext);
  const [quantity, setQuantity] = useState(item.quantity);

  function onQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    setQuantity(!isNaN(value) ? value : 0);
  }

  return (
    <div className={css`
      ${my1}
      ${flex}
      justify-content: flex-start;
      gap: 10px;
    `}>
      <div className={css`
        width: 100px;
        ${textCenter}
      `}>
        <i className={'fas fa-mobile fa-3x'}></i>
      </div>
      <div>
        <h3>{item.name}</h3>
        <span>
          {item.quantity > 1
            ? `${item.quantity} x $${item.price} ($${item.quantity * item.price})`
            : `$${item.price}`}
        </span><br />
        <label>Quantity:</label>
        <input className={css`
          border: 0;
          width: 100px;
          margin-left: 5px;
          border-bottom: 1px solid #b4becb;
          padding: 3px;
          font-size: 16px;
          &:focus {
            outline: none;
          }
          ${!quantity ? `
            border-color: red;
          ` : ''}
        `} value={quantity} onChange={onQuantityChange} />
        <p>
          <button className={css`
            ${btn({outline: true, light: true, small: true})}
          `} onClick={() => CartContext.updateItem?.({...item, quantity})}>Update</button>
          <button className={css`
            ${btn({outline: true, light: true, small: true})}
            margin-left: 10px;
          `} onClick={() => CartContext.removeItem?.(item)}>Remove</button>
        </p>
      </div>
    </div>
  )
}

function Cart() {
  const CartContext = useContext(cartContext);
  function onCheckoutClick(e: MouseEvent) {
    e.preventDefault();
    console.log(CartContext.items);
  }
  return (
    <section className={cart}>
      <div className={css`
        ${container}
        min-width: 344px;
        @media (max-width: 500px) {
          padding: 0;
        }
      `}>
        <h1 className={css`
          font-size: 40px;
        `}>Shopping Cart</h1>
        <div>
          {CartContext.items?.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className={css`
          ${textCenter}
          ${borderTop}
          padding-top: 20px;
          margin-top: 40px;
        `}>
          <a
            className={btn({primary: true})}
            href="#!"
            onClick={onCheckoutClick}
          >Checkout</a>
        </div>
      </div>
    </section>
  );
}

export default Cart;