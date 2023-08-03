import React from "react";

const Commoncardtwo = ({Imagename,Titlename}) => {
    return(
<div className='secondcards'>
            <div className='secondseticons'> <img src={Imagename} alt='icons'></img> </div>
            <div className='secondsettitle'>{Titlename}</div>
            <div className='secondsetpara'>Health insurance will not only give your employees and their families enough financial security, but an overall sense of satisfaction that their employer actually cares about them.</div>
          </div>
    );
}
export default Commoncardtwo;