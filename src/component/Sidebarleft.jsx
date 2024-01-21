import './SideBarStyle.css'
import Item from './Item'
import {BsTwitter} from "react-icons/bs"

export default function SideBarleft({links}){
    const mystyle = {
        color:'#1d9bf0',
         fontSize:'50px',
          marginTop:'20px'
      }
    return(
        <div className="left"> 
        <BsTwitter style={mystyle}/>

        {links.map(item=> <Item  {...item} key={item.id}/>)}
        <button className='btntweet'>Tweet</button>

        </div>
    )
}   
