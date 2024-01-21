

import "./itemstyle.css"
export default function Item ({title,icon}){
  
    return (
        <div className="item">
            {icon}
            <p>{title}</p>
        </div>

    )
}