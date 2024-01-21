
import NavBar from "../component/NavBar";
import Cards from "../component/Cards";
import {Dark} from "../component/theme"
export default function Home(){
 
    const mode=Dark()

        const styletheme={
            backgroundColor:mode? '#000':"#fff",
            color:mode ? '#fff':'#000'
        }

    return(
        <div style={styletheme}> 
            <NavBar/>
            <Cards orderstyle={true}/>
            <Cards orderstyle={false} />
        </div>
    )
} 