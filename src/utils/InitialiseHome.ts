import { IItemsDisplay } from "../redux/types";

export const InitialiseHome = () => {
  const categories = [
    { id: 1, name: "Ноутбуки" },
    { id: 2, name: "Монітори" },
    { id: 3, name: "Планшети" },
  ];

  return {
    id: 0,
    itemsDisplay: [] as IItemsDisplay[],
    categories,
    category: "Монітори",
    catalogSize: 100,
    isOpened: false,
    
  };
};
