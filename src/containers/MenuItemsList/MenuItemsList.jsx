/**
 * @description this file hold set of menuItem components that are comming from mapping the array of menuList
 */
import React from "react";
// import MenuItemCard
import { MenuItemCard } from "../../components";
// mui components
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// react reveal
import { Zoom } from "react-awesome-reveal";
const MenuItemsList = ({ menuData }) => {
  console.log(menuData);
  // mapping through menuData
  const meals = menuData.map((item) => {
    return (
      <Grid item key={item.id} xs={12} sm={6} md={4} alignItems="center">
        <Zoom>
          <Stack alignItems="center" justifyContent="center">
            <MenuItemCard menuItem={item} />
          </Stack>
        </Zoom>
      </Grid>
    );
  });
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {meals}
    </Grid>
  );
};

export default MenuItemsList;
