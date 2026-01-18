import { useState } from 'react';
import './RightCol.css';
const RightCol = () => {
  const[units, setunits] = useState('-273.15');

  return (
    <section className='sectionclass'>
      <p className='Hclass'>Weather Forcasting</p>
      <hr className='hrclass'/>

      <div className="block">
        <p className='pclass'>Yesterday</p>

        <img src="src\assets\icons\rainy.svg" className='imgclass'/>
        <div className='loclass'>
          <label htmlFor="tempYest" ></label>
          <input type="text" id="tempYest" value='15' readOnly className='inputclass'/>
        </div>
      </div>

      {/* block2 */}

      <div className="block">
        <p className='pclass'>Yesterday</p>

        <img src="src\assets\icons\rainy.svg" className='imgclass'/>
        <div>
          <label htmlFor="tempYest"></label>
          <input type="text" id="tempYest" value="15" readOnly className='inputclass' />
        </div>
      </div>

      {/* block3 */}

      <div className="block">
        <p className='pclass'>Yesterday</p>
        <img src="src\assets\icons\rainy.svg" className='imgclass'/>
        <div>
          <label htmlFor="tempYest"></label>
          <input type="text" id="tempYest" value="15" readOnly className='inputclass' />
        </div>
      </div>
    </section>
  );
};
export default RightCol;
