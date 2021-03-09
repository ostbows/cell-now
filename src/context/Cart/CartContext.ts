import { createContext } from "react";
import {ContextProps} from '../../ts_def';

const CartContext = createContext<Partial<ContextProps>>({});

export default CartContext;