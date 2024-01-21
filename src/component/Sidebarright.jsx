import './SideBarStyle.css'
import{CiSearch} from 'react-icons/ci'
import{AiOutlineSetting} from 'react-icons/ai'

export default function Sidebarright() {
    return (
        <div className="right">
        
            <div className='divInput'>
            <CiSearch fontSize={'25px'}></CiSearch>
            <input type="text" placeholder='Search Twitter' className='SearchInput' />

            </div>
            <div className='trends'>
                <div className='titletrends'>
                <h3>Trends for you</h3>
                <AiOutlineSetting fontSize={'25px'} color='#1d9bf0'/>
                </div>
                <hr/>
            </div>
        </div>
    )
}