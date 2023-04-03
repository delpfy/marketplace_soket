import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IItems } from "../../../redux/types";
import { getItemsByCategory } from "../../../redux/home/asyncActions";
import CatalogTestBlock from "../Block/CatalogTestBlock";

import "./catalogfield.scss";
import NotFoundPage from "../../../Pages/NotFound/NotFoundPage";

export const CatalogField = () => {
  const { category, status } = useAppSelector((state) => state.home);
  // IItemsDisplay has {items: [{...}]} field in it, so we trying to get
  // exactly that field.
  const { items } = useAppSelector((state) => state.home.itemsCategory);

  const dispatch = useAppDispatch();

  // Trying to make request to get items from same category.
  useEffect(() => {
    dispatch(getItemsByCategory(category));
  }, [category]);

  const Catalog = () => {
    return (
      <Box>
        <Box>
          <Typography variant={"h3"}>{category}</Typography>
        </Box>
        <Box>
          {items.map((item: IItems) => (
            <CatalogTestBlock key={item._id} {...item} />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    // 'success' | 'pending'| 'error'
    status === "success" ? <Catalog /> : <NotFoundPage />
  );
};

export default CatalogField;
