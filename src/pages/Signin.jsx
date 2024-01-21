
import { useState } from 'react'
import './Signstyle.css'
import { useEffect } from 'react';


export default function Signin() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
  
    return (
        <div className='divsign'>
            <div className='divimg'>
                <img src="https://root-nation.com/wp-content/uploads/2023/07/twitter-x-01.jpg" alt="image" />

            </div>

            <div>
                <h1>Sign in to Twitter</h1> 
               
                <input type='text' placeholder='user,email,phone'  className='input'/> <br /> <br />
                <input type='password' placeholder='password'  className='input'/> <br /> <br />
                <button className='button'>Sign in</button>

            </div>
        </div>
    )
}