import {State, Action} from '../../ts_def';
import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from './types';

function CartReducer(state: State, action: Action): State {
  const { payload, type } = action;
  switch (type) {
    case ADD_ITEM:
      let hasItem = false;
      const items = state.items.map(item => {
        if (item.id === payload.id) {
          hasItem = true;
          return {
            ...item,
            quantity: item.quantity + payload.quantity
          };
        }
        return item;
      });
      if (hasItem) {
        return {
          ...state,
          items
        };
      }
      return {
        ...state,
        items: [...items, payload]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id)
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              ...payload
            };
          }
          return item;
        })
      }
    default:
      return state;
  }
}

export default CartReducer;