import React from "react";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
const FilterButtons = ({ filterMeuByCategory }) => {
  // filter meals function
  /**
   * @description this function accept a category that describe the button and then pass it to the function that is pass here from the App
   */
  const filterMeals = (cat) => {
    if (cat !== "") {
      filterMeuByCategory(cat);
    }
  };
  return (
    <div>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{ my: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            maxWidth: "120px",
            maxHeight: "50px",
            minWidth: "120px",
            minHeight: "50px",
            textTransform: "none",
          }}
          onClick={() => {
            filterMeals("all");
          }}
        >
          All
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            maxWidth: "120px",
            maxHeight: "50px",
            minWidth: "120px",
            minHeight: "50px",
            textTransform: "none",
          }}
          onClick={() => {
            filterMeals("meat");
          }}
        >
          Meat
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            maxWidth: "120px",
            maxHeight: "50px",
            minWidth: "120px",
            minHeight: "50px",
            textTransform: "none",
          }}
          onClick={() => {
            filterMeals("chicken");
          }}
        >
          Chicken
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            maxWidth: "120px",
            maxHeight: "50px",
            minWidth: "120px",
            minHeight: "50px",
            textTransform: "none",
          }}
          onClick={() => {
            filterMeals("fish");
          }}
        >
          Fishes
        </Button>
      </Stack>
    </div>
  );
};

export default FilterButtons;
