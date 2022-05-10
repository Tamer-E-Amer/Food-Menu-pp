import React from "react";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
const FilterButtons = ({ filterMeuByCategory, allCategories }) => {
  // filter meals function
  /**
   * @description this function accept a category that describe the button and then pass it to the function that is pass here from the App
   */
  const filterMeals = (cat) => {
    if (cat !== "") {
      filterMeuByCategory(cat);
    }
  };

  /**
   * @description: maping through the all category prop to render all buttons with the categories
   */
  const categoriesButtons = allCategories.map((category, index) => (
    <Button
      // make the first button is contained and the other is outlined
      variant={index === 0 ? "contained" : "outlined"}
      size="large"
      sx={{
        maxWidth: "120px",
        maxHeight: "50px",
        minWidth: "120px",
        minHeight: "50px",
        textTransform: "none",
      }}
      onClick={() => {
        filterMeals(category);
      }}
      key={index}
    >
      {category}
    </Button>
  ));

  return (
    <div>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{ my: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {categoriesButtons}
      </Stack>
    </div>
  );
};

export default FilterButtons;
