

import './Signstyle.css'


export default function Signup() {
    
  
    return (
        <div className='divsign'>
            <div className='divimg'>
                <img src="https://root-nation.com/wp-content/uploads/2023/07/twitter-x-01.jpg" alt="image" />

            </div>

            <div>
                <h1>Sign up to Twitter</h1> 
                <input type='text' placeholder='name' className='input' /> <br /> <br />
                <input type='text' placeholder='lastname'  className='input'/> <br /> <br />
                <input type='text' placeholder='email'  className='input'/> <br /> <br />
                <input type='password' placeholder='password' className='input' /> <br /> <br />
                <button className='button'>Sign up</button>

            </div>
        </div>
    )
}