import React from "react";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
const FilterButtons = () => {
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
        >
          Fishes
        </Button>
      </Stack>
    </div>
  );
};

export default FilterButtons;
