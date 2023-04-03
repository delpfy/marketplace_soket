import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IItems } from "../../../../redux/types";
import { Box, Rating } from "@mui/material";
import { useAppDispatch } from "../../../../redux/hooks";
import { getItemById } from "../../../../redux/home/asyncActions";
import { useNavigate } from "react-router-dom";

export default function CatalogCard(props: IItems) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Redirecting to ItemPage
  function Redirect() {
    dispatch(getItemById(props._id));
    navigate("/marketplace_soket/item");
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 450,
        maxHeight: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2%",
      }}
    >
        
      <CardMedia
        sx={{
          maxHeight: 200,
          minHeight: 200,
          objectFit: "cover",
          overflow: "hidden",
        }}
        image={props.image[0]}
        title={props.name}
        onClick={() => Redirect()}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          minHeight={70}
          maxHeight={70}
          overflow={"hidden"}
          fontFamily={"Comfortaa"}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          maxHeight={100}
          color="text.secondary"
          overflow={"hidden"}
          fontFamily={"Comfortaa"}
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </Box>

        <Box>
          <Rating name="read-only" value={props.rating} readOnly />
        </Box>
      </CardActions>
    </Card>
  );
}
