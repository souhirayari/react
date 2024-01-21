import './NavBarStyle.css'
import { Link } from "react-router-dom";
import {clickcontext} from "./theme"

export default function NavBar() {

  const   links = [
        {
            id: 1,
            name: "home",
            path: "/"
        },
        {
            id: 2,
            name: "login",
            path: "/login"
        }
    ]


 const ClickContext=clickcontext() 

    return (
        <div className='navbar'> 
            <b>logo </b>
            <div >
                <ul className='bar'>
                    {links.map(({id,path, name}) =>
                        (<li key={id}>
                            <Link to={path}>{name}</Link>
                        </li>
                        )
                    )}

                </ul>
            </div>
            <button onClick={ClickContext}> dark mode</button>
        </div>
    )


}