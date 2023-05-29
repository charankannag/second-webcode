import Landing from "../Pages/landing";
import  Contactus from "../Pages/contactus";
import Product from "../Pages/product";
import Cart from "../Pages/cart";
export const openRoutes=[
    {
        name:"landing|service provided",
        id:"landing",
        Component:()=><Landing />,
        path:"/",
    },
]

export const closedRoutes=[
    {
        name:"contactus|equipmentrental",
        id:"contactus",
        Component:()=><Contactus />,
        path:"/contact/:id",
    },
    {
        name:"cart|equipmentrental",
        id:"cartdetails",
        Component:()=><Cart />,
        path:"/cart/:id",
    },
    {
        name:"product|equipmentrental",
        id:"productdetails",
        Compomnent:()=><Product />,
        path:"/product/:id",
    },
]


