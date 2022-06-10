import './header.css';

import home from './home-alt-2-regular-24.png';
import plane from './paper-plane-regular-24.png';
import compass from './compass-regular-24.png';
import heart from './heart-regular-24.png';
import profile from './profile.jpg';
function Header(){
    return(
        <div className='main'>
            <span id='logo'>Instagram</span>
            <div className='icons'>
                <img src={home} alt="home"/>
                <img src={plane} alt="plane"/>
                <img src={compass} alt="compass"/>
                <img src={heart} alt="heart"/>
                <img src={profile} alt="profile" className='profile'/>
            </div>
            <hr/>
        </div>
    );
}
export default Header;