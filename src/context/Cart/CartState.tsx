import {ReactNode, useReducer} from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from './types';
import {Item} from '../../ts_def';

function CartState({children}: {children: ReactNode}) {
  let initialState = {
    items: []
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  function addItem(item: Item) {
    dispatch({type: ADD_ITEM, payload: item});
  }

  function removeItem(item: Item) {
    dispatch({type: REMOVE_ITEM, payload: item});
  }

  function updateItem(item: Item) {
    if (item.quantity > 0) {
      dispatch({type: UPDATE_ITEM, payload: item});
    }
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartState;