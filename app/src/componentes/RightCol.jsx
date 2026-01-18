import { useState } from 'react';
import './RightCol.css';
const RightCol = () => {
  const[units, setunits] = useState('-273.15');

  return (
    <section className='sectionclass'>
      <p className='Hclass'>Weather Forcasting</p>
      <hr className='hrclass'/>

      <div className="block">
        <div className='loclass'>
        <p className='pclass'>Yesterday</p>
        <img src="src\assets\icons\rainy.svg" className='imgclass'/>
        </div>
          <label htmlFor="tempYest" ></label>
          <input type="text" id="tempYest" value='15' readOnly className='inputclass'/>
        
      </div>

      {/* block2 */}

      <div className="block">
        <div className='loclass'> 
        <p className='pclass'>Sunrise</p>
        <img src="src\assets\icons\day.svg" className='imgclass'/>
        </div>
          <label htmlFor="tempYest"></label>
          <input type="text" id="tempYest" value="6am" readOnly className='inputclass' />
       
      </div>

      {/* block3 */}

      <div className="block">
        <div className='loclass'> 
        <p className='pclass'>Sunset</p>
        <img src="src\assets\icons\night.svg" className='imgclass'/>
        </div>
          <label htmlFor="tempYest"></label>
          <input type="text" id="tempYest" value="6pm" readOnly className='inputclass' />
        
      </div>
    </section>
  );
};
export default RightCol;
