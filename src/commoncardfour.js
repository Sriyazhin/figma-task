import React from "react";

const Commoncardfour = ({Plus,Contentlines}) => {
    return(
        
                  <div className='boxone'>
                    <div className='forplusimage'><img src={Plus} alt="plusimage"></img></div>
                    <div className='forcontentinbox'>{Contentlines}</div>
                  </div>
    );
}
export default Commoncardfour;