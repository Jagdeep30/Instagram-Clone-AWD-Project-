import './grid-icon.css';
import user from './user.png';
import grid from './grid-regular-24.png';

function GridIcon(){
    return(
        <div id='grid-main'>
            <hr/>
            <div id='icons'>
                <img src={grid} alt='grid' id='gridimg'/>
                <img src={user} alt='user' id='userimg'/>
            </div>
        </div>
    );
}

export default GridIcon;