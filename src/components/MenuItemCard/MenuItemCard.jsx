/**
 * @description this component contains list of item cards
 */
import React from "react";
// mui components
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import meat1 from "../../imgs/meat1.png";
const MenuItemCard = ({ menuItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "secondary", fontSize: 12, fontWeight: 500 }}
            aria-label="recipe"
          >
            {menuItem.price} &#163;
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={menuItem.mealTitle}
        subheader={menuItem.kitchenType}
      />
      <CardMedia
        component="img"
        height="194"
        image={`${menuItem.img}`}
        alt={`${menuItem.img}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
