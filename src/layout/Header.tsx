import { css } from '@emotion/css';
import {useContext} from 'react';
import { Link } from "react-router-dom";
import {container, flex} from '../styles/utilities';
import cartContext from '../context/Cart/CartContext';

function ListItem(
  {to, children}: {to: string, children: string}
) {
  return (
    <li>
      <Link className={css`
        color: #fff;
        padding: 10px;
        margin: 0 5px;
        &:hover {
          border-bottom: 2px #fff solid;
        }
      `} to={to}>
        {children}
      </Link>
    </li>
  );
}

function Header() {
  const CartContext = useContext(cartContext);
  return (
    <div className={css`
      background-color: var(--primary-color);
      color: #fff;
      height: 70px;
      @media (max-width: 500px) {
        height: 110px;
      }
    `}>
      <div className={css`
        ${container}
        ${flex}
        justify-content: space-between;
        @media (max-width: 500px) {
          flex-direction: column;
        }
      `}>
        <h1>CellNow.</h1>
        <nav>
          <ul className={css`
            display: flex;
            @media (max-width: 500px) {
              padding: 10px;
              background-color: rgba(0,0,0,0.1);
            }
          `}>
            <ListItem to="/">Home</ListItem>
            <ListItem to="/cart">{`Cart (${
              CartContext.items?.reduce((res, item) => res + item.quantity, 0)
            })`}</ListItem>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;