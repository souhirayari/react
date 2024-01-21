import './cardsstyle.css'
export default function Cards({ orderstyle }) {
    const mystyle = {
        order: orderstyle ? -1 : 2
    };
    return (
        <div className="cards" >
            <img style={mystyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4_Ajrbn2f7D9GN_4nTuPeepL9UWuRjY7bg&usqp=CAU" alt="image" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem architecto saepe voluptatibus aliquid quasi nihil nemo harum quam repudiandae laborum dolorem assumenda, corrupti ex optio atque. Ipsum, cum voluptatibus.</p>

        </div>

    )
}