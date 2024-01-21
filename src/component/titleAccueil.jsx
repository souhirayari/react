

import "./AccueilStyle.css"

import {BsStars} from "react-icons/bs"


export default function TitleAccueil({text}){
    return(
        <div className="titleAccueil">
            <h3>{text}</h3>
            <BsStars/>
            
        </div>

    )
}