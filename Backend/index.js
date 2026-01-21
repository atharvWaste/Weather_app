import axios from 'axios' 
import express from 'express'
import cors from 'cors'
const app = express();

const port = 3000;
app.use(cors());
let lastCity = null; // fallback when GET is called without query

// Add a minimal Content-Security-Policy header so browsers allow connect (fetch/XHR/WebSocket)
// Adjust origins as needed (e.g. add your frontend dev origin or production API hosts).
app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; connect-src 'self' http://localhost:3000 https://api.openweathermap.org"
    );
    next();
});

// solutionfor the error Content Security Policy directive(csp) :- Progress: inspected index.js and Location.jsx, then added CSP middleware to the backend. Next: restart the backend and test.

// Change made: Updated index.js to set a minimal CSP header allowing connect-src to localhost and OpenWeather.
// Backend middleware (already applied):
// File: index.js
// Snippet added:
app.use(express.json()); 

// PUT /test route
app.put("/", (req, res) => {
    const arrayFromFrontend = req.body; 
    // console.log('Array from frontend:', arrayFromFrontend);
 const Contery = arrayFromFrontend[0];
 const state = arrayFromFrontend[1];
 const city = arrayFromFrontend[2];
// console.log("Contery", Contery);
// console.log("state", state);
console.log("city", city);

    if (city) lastCity = city;

    // Validate that we got an array
    if (arrayFromFrontend && Array.isArray(arrayFromFrontend)) {
        res.status(200).json({
            message: 'Array received successfully!',
            count: arrayFromFrontend.length,
            data: arrayFromFrontend
        });
    } else {
        res.status(400).json({
            message: 'No array received or invalid data',
        });
    }
});

app.get('/', async (req, res) => {
    const city = req.query.city || lastCity;
    if (!city) return res.status(400).json({ message: 'Missing `city` query parameter' });

    const API_KEY = process.env.OPENWEATHER_API_KEY || '104cf08e2988bc44ee80362a9cc9cce4';
    try {
        const geoResp = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
            params: { q: city, limit: 1, appid: API_KEY }
        });
        const geo = geoResp.data;
        if (!geo || geo.length === 0) return res.status(404).json({ message: 'City not found' });

        const outPutlat = geo[0].lat;
        const outPutlon = geo[0].lon;

        const weatherResp = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: { lat: outPutlat, lon: outPutlon, appid: API_KEY }
        });

        res.json(weatherResp.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// error :- violates the following Content Security Policy directive: "default-src 'none'". The request has been blocked. Note that 'connect-src' was not explicitly set, so 'default-src' is used as a fallback. what is this
/*resone:-'connect-src' was not explicitly set connect-src controls: Axios,fetch,WebSocket  Since it is not defined, browser falls back to: Which means: No API calls allowed
default-src 'none'
*/



app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
