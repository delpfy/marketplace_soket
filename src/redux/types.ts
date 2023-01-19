export type IItemsAmount = {
  id: number;
  amount: number;
};

export type IItems = {
  props: IItemsDisplay;
  amount: number;
};

export type IItemsDisplay = {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string[];
  description: string;
};

export interface BasketState {
  items: IItems[];
  itemsAmount: IItemsAmount[];
  expences: number;
}

export interface HomeState {
  id: number
  itemsDisplay: IItemsDisplay[];
  categories: {id: number, name: string}[] ;
  category: string;
  catalogSize: number;
  isOpened: boolean;
}
