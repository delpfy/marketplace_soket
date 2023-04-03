import { IBasketItemsDisplay} from "../redux/types";


export const InitialiseBasket = () => {
  return {
    items: {} as IBasketItemsDisplay,
    expences: 0,
  };
};
