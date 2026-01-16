import './LowerRep.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const LowerRep=()=>{
const[Visibility, setVisibility] = useState('');

axios.get('http://localhost:3000/')
.then(Response =>{
    const Visibi = Response.data.visibility
    setVisibility(Visibi);
    console.log(Visibi)
})

    return <section className='sectionStyle'>
<div className='boxStyle'>
   <img src="src\assets\icons\visibility.svg" className='imgclass' />
<p className='visibilityREP'>

   Visibility(in m)   = {Visibility}
</p>
       
</div>
<div className='boxStyle'>
<img src="src\assets\icons\Arrow.svg" className='imgclass' />
<p className='visibilityREP'>

   Visibility(in m)   = {Visibility}
</p>

</div>
<div className='boxStyle'></div>
    </section>
}
export default LowerRep;