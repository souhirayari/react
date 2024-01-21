import { useState } from "react";
import SideBarleft from "../component/Sidebarleft";
import Sidebarright from "../component/Sidebarright"
import Accueil from "../component/Accueil"


import "./Homestyle.css"

import {AiFillHome}from "react-icons/ai"
import {MdExplore}from "react-icons/md"
import {GrNotification}from "react-icons/gr"
import {AiOutlineMessage}from "react-icons/ai"
import {BsFillBookmarkCheckFill}from "react-icons/bs"
import {RiFileList2Line}from "react-icons/ri"
import {CgProfile}from "react-icons/cg"
import {CgMoreO}from "react-icons/cg"



export default function Home(){

  const [links,setlinks]=useState([

    {
        id:1,
        icon:<AiFillHome/>,
        title:"Home"
    },
    {
        id:2,
        icon:<MdExplore/>,
        title:"Explore"
    },

    {
        id:3,
        icon:<GrNotification/>,
        title:"Notification"
    },
    {
        id:4,
        icon:<AiOutlineMessage/>,
        title:"Message"
    },

    {
        id:5,
        icon:<BsFillBookmarkCheckFill/>,
        title:"BookMarks"
    },

    {
        id:6,
        icon:<RiFileList2Line/>,
        title:"List"
    },
    {
        id:7,
        icon:<CgProfile/>,
        title:"profil"
    },

    {
        id:8,
        icon:<CgMoreO/>,
        title:"More"
    },

  ])
 

    return(
        <div className="home">
            <SideBarleft links={links}/>
            <Accueil/>  
            <Sidebarright/>
            
        </div>
    )
}
