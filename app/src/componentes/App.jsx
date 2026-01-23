
import Center from './Desktop'
import Location from './Location';
import Information from './Information';
import { Routes, Route } from 'react-router-dom';


const App = () =>{

  return <main>
       <Routes >
        <Route path="/" element={<Center />}/>

        <Route path="/location" element= {<Location />}/>

        <Route path="/info" element= {< Information/>}/>
      </Routes>
    </main> 
}

export default App;