import './footer.css';
import plus from './plus-circle-solid-36.png';

function Foot(){
    return(
        <div id='addmain'>
            <img src={plus} alt='plus' id='plus'/>
            <div id='line'></div>
        </div>
    );
}

export default Foot;