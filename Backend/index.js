import axios from 'axios' 
import express from 'express'
import cors from 'cors'
const app = express();
const port = 3000;
app.use(cors());
app.get('/', (req,res)=>{
 axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=104cf08e2988bc44ee80362a9cc9cce4')
    .then(response=>{
const weatherOBJ = response.data
         res.json(weatherOBJ)
         

    });

});
app.listen(3000);