import post from './post.jpg';
import './grid.css';

function Grid(){
    return(
        <div id="gridmain">
            <img src={post} alt="post" className="img"/>
            <img src={post} alt="post" className="img"/>
            <img src={post} alt="post" className="img"/>
            <img src={post} alt="post" className="img"/>
            <img src={post} alt="post" className="img"/>
            <img src={post} alt="post" className="img"/>
        </div>
    );
}

export default Grid;