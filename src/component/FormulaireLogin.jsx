
 import './FormStyle.css'
export default function FormulaireLogin()
{
    return (
        <div className="formulaire">
            <input type="text" placeholder="user" /> <br />
            <input type="password"  placeholder="password"/> <br />
            <button>submit</button>
        </div>
    )
}