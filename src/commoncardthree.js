import React from "react";
import Arrow from './assets/images/arrow.png';

const Commoncardthree=({Imageone,Classone,Contentline,Imageclassone,Textone,Mainclass,Idforcontent})=>{
    return(
        <div className={Mainclass}>
            <div className="tawuniya">{Textone}</div>
            <div className={Classone}><img src={Imageone} alt='ithraimage' className={Imageclassone}></img></div>
                  <div className='offerandlearnmore' id={Idforcontent}>
                    <div className='offers' >{Contentline}</div>
                    <div className='arrowandlearnpart'>
                      <div className='arrow'><img src={Arrow} alt='arrowmark'></img></div>
                      <div className='learnmore'>Learn More</div>
                  </div>

                </div>
              </div>
    );
}
export default Commoncardthree;