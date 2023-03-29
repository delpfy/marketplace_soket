import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import socket_logo from "../../../assets/img/socket_logo.png";
import PowerTwoToneIcon from '@mui/icons-material/PowerTwoTone';
import "./logo.scss";

export const Logo = () => {
  return (
    <Link to="/marketplace_soket" className="logotype_logo">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent = {'space-between'}
        alignItems = {'center'}
        width={140}
        sx={{ textDecoration: "none" }}
      >
        <Typography 
        variant={"h3"} 
        fontSize={35}
        height = {32}
        fontFamily = {'Josefin Sans'}
        >
          Socket
        </Typography>
        <Box
        width = {40}
        height = {40}
        >
          <IconButton
          sx = {{padding: "0", height: "40px", width: "40px"}}
          
          >
          <PowerTwoToneIcon
          sx = {{ height: "40px", width: "40px"}}
          
          />

          </IconButton>
        </Box>
      </Box>
    </Link>
  );
};

export default Logo;
