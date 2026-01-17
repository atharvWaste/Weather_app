import RightCol from './RightCol'
import LowerRep from './LowerRep'
import Aside from './Aside'

import { useEffect } from "react";
import { useState } from "react";

import axios from 'axios'
import './desktop.css'
const Center = (props) =>{
const [description, setDescription] = useState('');
const [temp , setTemp] = useState('');
useEffect (() =>{

axios.get('http://localhost:3000/')
.then(Response =>{
  const des = Response.data.weather[0].description
  const DegTemp =Math.round(Response.data.main.temp -273.15) ;
  setTemp(DegTemp)
  setDescription(des)
  console.log(DegTemp , des)
})

}, []);
    return (
        
      <div >
        <Aside  />

        <div className="loction">
          <label htmlFor="cityName"  className='cityName'></label>
           <input type="text" id="cityName" className='inputcityName' value="India" readOnly/>
        </div>
        <div className="Logo">
            <img src="src\assets\icons\rainy.svg" alt="Rain" className='Logoimg'/>
        </div>
        <div className="tempdisplay"> 
           <label htmlFor="TempDisplay" className='templdisplay'></label>
           <input type="number" id="TempDisplay" value={temp } readOnly/>
        </div>
        <div className='looksLike' >
          <p>
            Looks like {description}.
          </p>
        </div>
                            <LowerRep/>
                             <RightCol />
      </div>

    );

}

export default Center;