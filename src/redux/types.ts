

export type IItemsDisplay = {
  items: IItems[];
};

export type IItemDisplay = {
  items: IItems;
};
export type IBasketItemsDisplay = {
  items: IBasketItems[];
};

export type IItems = {
  _id: string;
  category: string;
  name: string;
  price: number;
  rating: number;
  image: string[];
  description: string;
};

export type IBasketItems = {
  _id: string;
  category: string;
  name: string;
  price: number;
  rating: number;
  amount: number;
  image: string[];
  description: string;
};

export type Status = 'success' | 'pending' | 'error'

export interface BasketState {
  items: IBasketItemsDisplay;
  expences: number;
}

export interface HomeState {
  status: Status;
  id: number;
  itemsDisplay: IItemsDisplay;
  itemsCategory: IItemsDisplay;
  itemCurrent: IItemDisplay;
  categories: {id: number, name: string}[] ;
  category: string;
}
