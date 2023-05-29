import React from "react";
import {Box, Typography} from "@mui/material";
import { AppImages } from "../configs/images";
import BasicCta from "../Elements/Cta/BasicCta";
import { AppColours } from "../configs/colours";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {savelandinguser} from "../Redux/Reducer/Authentication.reducer";
export default function Landing() {
    const Navigator=useNavigate();
    const dispatcher=useDispatch()
    const state=useSelector((state)=>state.authentication);
    console.log(state);
    const handleAuthentication=(type="")=>{
             if(type==="Add to cart") {
                console.log("Adding")
                dispatcher(
                savelandinguser({
                    userName: "Charan",
                    role: ["customer"],
             })
                );
                navigator("/")
             }
    }
    return (
        <Box className="landing-page App-container">
            <Box className="landing-header" sx={{
                backgroundImage: `url(${AppImages.laptop})`,
            }}></Box>
            <Box className="landing-body">
                <Typography variant="h4" color={"white"} sx={{textAlign:"start",lineHeight:"3.5rem",}}>
                    The Experience of equipment rentalling at affordable prices
                </Typography>
                <BasicCta label="Add to cart" id="Add to cart" fullWidth overrides={{
                    height:"50px",
                    marginBottom:"20px",
                    background:AppColours.secondary,
                }} handleClick={()=>handleAuthentication("cart")}/>
            </Box>
        </Box>
    )
}