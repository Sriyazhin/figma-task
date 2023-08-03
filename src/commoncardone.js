import React from "react";
import Orangearrow from './assets/images/orangearrow.png';
import Blackarrow from './assets/images/blackarrow.png';

const Commoncardone = ({imagename,titlename,Idname}) => {
    return(
        <div className='cardone'>
        <div className='forsubicons'> <img src={imagename} alt='person dollar'></img> </div>
        <div className='fortitles' id={Idname}>{titlename}</div>
        <div className='forcontent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever  
        <div className='rectangle'></div>
        </div>
        <div className='cardline'><hr></hr></div>
        <div className='forsubbuttons'>
          <div className='learnmorebutton'>LEARN MORE <img src={Orangearrow} alt="orangearrow" className="arroworange"></img>
          </div>
          <div className='getquotebutton'>GET QUOTE <img src={Blackarrow} alt="orangearrow" className="arroworange"></img></div>
        </div>
      </div>
    );
}
export default Commoncardone;