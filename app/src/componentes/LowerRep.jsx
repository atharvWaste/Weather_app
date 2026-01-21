import './LowerRep.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const LowerRep=()=>{
const[Visibility, setVisibility] = useState('');
const [WindSpeed, setWindspeed] = useState('');
const [Humidity, setHumidity] = useState('');
axios.get('http://localhost:3000/')
.then(Response =>{
    const Visibi = Response.data.visibility;
    const windStore = Response.data.wind.speed;
    const humidityStore = Response.data.main.humidity;
    setHumidity(humidityStore)
    setWindspeed(windStore);
    console.log(Visibility);
    console.log(WindSpeed);
    setVisibility(Visibi);
})

    return <section className='sectionStyle'>
<div className='boxStyle'>
   <img src="src\assets\icons\visibility.svg" className='imgclass' />
<p className='visibilityREP'>
   Visibility(in m) = {Visibility ||"Data is getting from sateliete..."}
</p>
       
</div>
<div className='boxStyle'>
<img src="src\assets\icons\Arrow.svg" className='imgclass' />
<p className='visibilityREP'>
   wind Speed(in meter/sec) = {WindSpeed ||"Data is getting from sateliete..."}
</p>

</div>
<div className='boxStyle'>
    <img src="src\assets\icons\humidity.png" className='imgclass' />
<p className='visibilityREP'>
   Humidity(in %) = {Humidity ||"Data is getting from sateliete..."}
</p>

</div>
    </section>
}
export default LowerRep;