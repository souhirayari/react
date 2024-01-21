import './AccueilStyle.css'
import TitleAccueil from './titleAccueil'

import { HiOutlinePhotograph } from "react-icons/hi"
import { AiOutlineGif } from "react-icons/ai"

import { AiOutlineUnorderedList } from "react-icons/ai"

import { BsEmojiWink } from "react-icons/bs"
import { LiaBusinessTimeSolid } from "react-icons/lia"
import { CiLocationOn } from "react-icons/ci"

export default function Accueil() {
    return (
        <div className='Accueil'>
            <TitleAccueil text={"Home"} />
            <div className='btnhome'>
                <button className='btn'>For You</button>
                <button className='btn'>Following</button>
            </div>
            <hr/>
            <div className='tweet'>
                <div className='inputtweet'>
                    <img className='image' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/284563830_3170911166558973_424111362856563086_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pz1Tk6d6XqkAX9ulUmk&_nc_ht=scontent.ftun16-1.fna&oh=00_AfDPLlOeT-zwFb8PNLM7ua7kuo0zpo8lc2HgjMfGu5138w&oe=64CD22BD" alt="image" />
                    <h2> What is Happening?!</h2>
                </div>
                <div className='iconstweet'>
                    <div className='icon'>
                    <HiOutlinePhotograph className='iconaccueil' />
                    <AiOutlineGif className='iconaccueil'  />
                    <AiOutlineUnorderedList  className='iconaccueil' />
                    <BsEmojiWink className='iconaccueil'  />
                    <LiaBusinessTimeSolid  className='iconaccueil' />
                    <CiLocationOn className='iconaccueil'  />
                    </div>
                    <button className='btntweet'>Post</button>
                </div>
            </div>
            <hr />





        </div>
    )
}