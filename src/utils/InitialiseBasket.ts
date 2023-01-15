import { IItemsAmount } from "../redux/types";
import { IItems } from "../redux/types";

export const InitialiseBasket = () => {
  return {
    items: [] as IItems[],
    itemsAmount: [] as IItemsAmount[],
    expences: 0,
  };
};
