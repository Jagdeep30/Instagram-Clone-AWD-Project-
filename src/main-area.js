import { useState } from 'react';
// import Radium from 'radium';
import profile from './profile.jpg';
import './main-area.css';
function Info(){
    const initial = ['Follow','Like']
    const [buttonText,setText] = useState(initial[0]);
    const [button2Text,setText2] = useState(initial[1]);
    // const [setColor] = useState();
    // const style = {
    //     backgroundColor:'gray',
    // }


    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      // 👇️ toggle
    //   setIsActive(current => !current);
  
      // 👇️ or set to true
      setIsActive(true);
    };

    const [isactive, setIsactive] = useState(false);

    const handleclick = () => {
      // 👇️ toggle
    //   setIsactive(current => !current);
  
      // 👇️ or set to true
      setIsactive(true);
    };







    // useEffect((style)=>{
    //     document.getElementById("follow").setAttribute("style", style)
    //     document.getElementById("like").setAttribute("style", style)
    // },[style])
    
    return(
        <div className="main-area">
            <div className="profile-info">
                <img src={profile}alt="profile" className='prof-photo'/>
                <div className="name">
                    <p id='prof-name'>React JS</p>
                    <div className="buttons">
                        <button id='follow' style={{
                                backgroundColor: isActive ? '#c6c6c6' : '',
                                color: isActive ? 'white' : '',
        }}
         onClick={()=>{
                            setText('Followed')
                            // setColor("gray")
                            handleClick()
                        } }>{buttonText}</button>
                        <button id='like' 
                        
                        style={{
                                backgroundColor: isactive ? '#c6c6c6' : '',
                                color: isactive ? 'white' : '',
        }} onClick={()=>{
                            setText2('Liked')
                            handleclick()
                        }}>{button2Text}</button>
                    </div>
                </div>
            </div>
            <div className="prof-info">
                <h5>reactjs.org</h5>
                <p>It is a javascript library which is used to easily develop apps and web based applications.</p>
                <a href="https://reactjs.org/docs/getting-started.html" id='link'>reactjs.org</a>
                <hr/>
            </div>
        </div>
    );
}


export default Info;