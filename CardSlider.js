import { Box, Typography, Chip } from "@mui/material";
import React from "react";

export default function CardSlider({data=[]}){
    return 
    <Box className="card-slider-container">
       {
        data&&data.length>0 &&data.map((_d,i)=>(<Box key={`card-${i}`} className="card-wrapper" 
        sx={{
            display:"flex",
            alignItems:"center",
            flexWrap:"no-wrap",
            overflowX:"scroll",
        }}>       
            <Box sx={{
                minwidth:"50%",
                height:"280px",
                background:"black",
                borderRadius:"10px",
                padding:"10px",
                boxSizing:"border-box",
            }}></Box>
            <Box sx={{
                width:"100%",
                height:"100%",
                background:"#000000",
            }}></Box>
            <Box className="card"
            sx={{     
                backgroundImage:`url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fnicepage.com%2Fst%2F287674%2Fcontact-us-form-and-adress-website-template&psig=AOvVaw3SfBSxu28gZeCoEdRdCmSN&ust=1684407718410000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDzsPCZ_P4CFQAAAAAdAAAAABAE')`,
            }}><Box className="card-header">
                <Chip label="sony" variant="outlined" onclick={()=>{}} sx={{
                    color:"#FFFFFF",
                    height:"20px",

                }} />
            </Box>
               <Box className="card-body">
                <Typography variant="h5" color={"white"}>action cameras</Typography>
                <Typography variant="caption" color={"white"}>laptops</Typography>
               </Box>
               <Box className="card-footer"></Box>
            </Box>
            <Box sx={{
                minwidth:"50%",
                height:"280px",
                background:"black",
                borderRadius:"10px",
            }}></Box>
        </Box>)
       )}        
    </Box>    
}