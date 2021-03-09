import { css } from '@emotion/css';
import {useContext, MouseEvent} from 'react';
import {container, textCenter, grid, btn} from '../styles/utilities';
import cartContext from '../context/Cart/CartContext';
import { Item } from '../ts_def';

function Product({item}: {item: Item}) {
  const CartContext = useContext(cartContext);

  function onAddItem(e: MouseEvent) {
    e.preventDefault();
    CartContext.addItem?.(item);
  }

  return (
    <div>
      <i className={'fas fa-mobile fa-3x'}></i>
      <h3 className={css`
        font-size: 35px;
      `}>{item.name}</h3>
      <p className={css`
        font-size: 20px;
        font-weight: bold;
      `}>$ {item.price}</p>
      <a className={css`
        ${btn({outline: true, light: true})}
      `} href="#!" onClick={onAddItem}>
        Add to Cart
      </a>
    </div>
  );
}

function Products() {
  return (
    <section className={css`
      padding-top: 100px;
      margin-bottom: 100px;
    `}>
      <div className={container}>
        <div className={css`
          ${grid({repeat: 3})}
          ${textCenter}
          @media (max-width: 768px) {
            gap: 50px;
          }
        `}>
          <Product item={{id: 0, price: 100, name: 'iPhone 5', quantity: 1}} />
          <Product item={{id: 1, price: 200, name: 'iPhone 6', quantity: 1}} />
          <Product item={{id: 2, price: 300, name: 'iPhone 7', quantity: 1}} />
        </div>
      </div>
    </section>
  );
}

export default Products;