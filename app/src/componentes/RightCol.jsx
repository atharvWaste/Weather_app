import { useState } from 'react';
import './RightCol.css';
import axios from 'axios';

const RightCol = () => {
  const[Sunset, setSunset] = useState('');
const[Sunrise, setSunrise] = useState('');
  const[AirPressure, setAirPressure] = useState('');
axios.get("http://localhost:3000")
.then(response =>{
  console.log(AirPressure);
const unixSunset = response.data.sys.sunset;
  const unixSunrise = response.data.sys.sunrise; //Api give the time in unix format in sec from 1970
  const aPressuerStore = response.data.main.pressure;
  setAirPressure(aPressuerStore);
  //the block of code will convert it in only time
const nSunrisetime = new Date(unixSunrise*1000);
const timeSunriseOnly = nSunrisetime.toLocaleTimeString();
console.log("time", timeSunriseOnly);
setSunrise(timeSunriseOnly);

const nSunsettime = new Date(unixSunset*1000);
const timeSunsetOnly = nSunsettime.toLocaleTimeString();
console.log("time", timeSunsetOnly);
setSunset(timeSunsetOnly);
}) 
  return (
    <section className='sectionclass'>
      <p className='Hclass'>Weather Forcasting</p>
      <hr className='hrclass'/>

      <div className="block">
        <div className='loclass'>
        <p className='pclass'>Atmospheric Pressure</p>
        <img src="src\assets\icons\atmospheric.png" className='imgclass'/>
        </div>
          <label htmlFor="tempYest" ></label>
          <input type="text" id="tempYest" value={AirPressure || "😥"} readOnly className='inputclass'/>
        
      </div>

      <div className="block">
        <div className='loclass'> 
        <p className='pclass'>Sunrise</p>
        <img src="src\assets\icons\day.svg" className='imgclass'/>
        </div>
          <label htmlFor="tempYest"></label>
          <input type="text" id="tempYest" value={Sunrise || "😥"} readOnly className='inputclass' />
       
      </div>

      <div className="block">
        <div className='loclass'> 
        <p className='pclass'>Sunset</p>
        <img src="src\assets\icons\night.svg" className='imgclass'/>
        </div>
          <label htmlFor="tempYest"></label>
          <input type="text" id="tempYest" value={Sunset || "😥"} readOnly className='inputclass' />
        
      </div>
    </section>
  );
};
export default RightCol;
