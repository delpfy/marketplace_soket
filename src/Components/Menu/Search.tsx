import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import search_icon from "../../assets/img/search_icon.svg";
import { IItemsDisplay } from "../../redux/types";
import { SetID } from "../../redux/home/homeSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Search = () => {
  const dispatch = useAppDispatch();
  const DISPLAY_ITEMS = useAppSelector((state) => state.home.itemsDisplay);
  
  const [searchItem, setSearchItem] = useState("");
  const [localDisplayItems, setLocalItems] = useState<IItemsDisplay[]>([]);

  const filterSearch = (entry: string) => {
    if (!entry) {
      return DISPLAY_ITEMS;
    } else {
      return DISPLAY_ITEMS.filter((el) =>
        el.name.toLowerCase().includes(entry.toLowerCase())
      );
    }
  };
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredSearch = filterSearch(searchItem);
      setLocalItems(filteredSearch);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchItem]);
  return (
    <div className="menu__search_block">
      <div className="menu__search">
        <input
          value={searchItem}
          autoFocus
          className="menu__search_input"
          placeholder="Type here"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <img className="menu__search_logo" src={search_icon} alt="searchLogo" />
      </div>
      <ul
        className={
          searchItem ? "menu__search_display" : "menu__search_display_invise"
        }
      >
        {localDisplayItems.map((el) => (
          <Link
          key={el.name}
            to="/marketplace_soket/item"
            onClick={() => (dispatch(SetID(el.id)), setSearchItem(""))}          
          >
            {" "}
            <div key={el.id} className="menu__search_display_item">
              {el.name}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Search;
