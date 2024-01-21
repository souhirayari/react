import FormulaireLogin from "../component/FormulaireLogin";
import NavBar from "../component/NavBar";
import { Dark } from "../component/theme";


export default function Login (){

    const modedark=Dark()
    const themestyle={
        backgroundColor: modedark? '#000':"#fff",
        color: modedark ? '#fff':'#000',
    }
    return(
        <div style={themestyle}>
            <NavBar/>
            <FormulaireLogin/>
        </div>
    )
}