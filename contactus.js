import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import CardSlider from "../Components/CardSlider/CardSlider";
import IconButton from "../Elements/Cta/IconButton";
import { CardTravel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import IconCta from "../Elements/Cta/IconButton";
import {ShoppingCart,Products} from "@mui/icons-material";

export default function Contactus() {
const navigator=useNavigate()
    return (
        <Box className="contactus-page">
            <AppBar prefix={<IconCta onClick={()=>navigator("/product/45455454g")} Icon={Products}/>} 
            content={<Typography variant="h6">Contactus Page</Typography>} 
            suffix={<IconCta onClick={()=>navigator("/cart/445435465g")} Icon={ShoppingCart}/>}/>
            <Box className="contactus-page-content">
            <CardSlider data={[{},{},{},{}]} />
            </Box>
        </Box>
    )
}