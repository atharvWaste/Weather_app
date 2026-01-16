
import Center from './Desktop'
import Location from './Location';
import Info from './info';

import { Routes, Route } from 'react-router-dom';

const App = () =>{
  return  <section>
    
      <Routes>
        <Route path="/" element={<Center /> }/>

        <Route path="/location" element= {<Location />} />

         <Route path="/info" element= {< Info/>} />
      </Routes>
   
    </section>
}

export default App;