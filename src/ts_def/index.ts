export interface Item {
  id: number;
  quantity: number;
  name: string;
  price: number;
}

export interface State {
  items: Array<Item>;
}

export type Action =
  | {type: 'ADD_ITEM'; payload: Item}
  | {type: 'REMOVE_ITEM'; payload: Item}
  | {type: 'UPDATE_ITEM'; payload: Item};

export interface ContextProps {
  items: Array<Item>;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  updateItem: (item: Item) => void;
}