import { useEffect, useState } from 'react'
import './App.css'

function App() {

    const [status, setStatus] = useState<1|0|-1>(-1);
    const [btn, setBtn] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        if (!btn) return;
        
        if (!Object.keys(elevationData).includes(input)) {
            alert("Choose from the provided list");
            return;
        }


        fetch(api(input)).then(data => data.json()).then(data => {
            if (!data.rain) {
                alert("Very sorry, due to the free tier, some data isn't available for all the mentioned states and UTs");
                return;
            }

            const ppt = data.rain['1h'];
            const elevation = Math.abs(data.main.sea_level - data.main.grnd_level);

            setStatus(Model(ppt, elevation));
        })  
    }, [btn]);

    function handleInput(str: string) {
        setInput(str);
        if (status != -1) setStatus(-1);
    }

    return (
        <div className='app'>
            <div className='heading'>
                Flood Forecasting
            </div>

            <div className='loc'>
                <input 
                    list="test" 
                    value={input} 
                    onInput={e => handleInput(e.currentTarget.value)} 
                    placeholder='States and union territories'
                />
                <datalist id='test'>
                    { Object.keys(elevationData).map((place, i) => <option key={i} value={place} />) }
                </datalist>
            </div>

            <div className='main'>
                <button onClick={() => setBtn(prev => !prev)}>{
                    status == 1 ? "Unsafe" : (status == 0 ? "Safe" : "Predict")
                }</button>
            </div>


            <div className='numbers'>
                <div> Emergency number: 784-458-6366 </div>
                <div> Disaster management: 784-458-6366 </div>
            </div>
        </div>
    )
}

function Model(ppt: number, elv: number) {
    let x0 = 52;
    let x = 1840;
    let y0 = 0;
    let y = elv;

    let xVal = ppt;
    let yVal = -0.58 * xVal + 1462;

    if ((xVal <= x && xVal >= x0) && (y <= yVal && y >= y0))
        return 1;
    else return 0;
}

const elevationData = {
  "andhra pradesh": 500,
  "arunachal pradesh": 2000,
  "assam": 50,
  "bihar": 100,
  "chhattisgarh": 300,
  "goa": 10,
  "gujarat": 200,
  "haryana": 250,
  "himachal pradesh": 1500,
  "jharkhand": 400,
  "karnataka": 800,
  "kerala": 100,
  "madhya pradesh": 400,
  "maharashtra": 500,
  "manipur": 600,
  "meghalaya": 1200,
  "mizoram": 800,
  "nagaland": 900,
  "orissa": 200,
  "punjab": 300,
  "rajasthan": 300,
  "sikkim": 1800,
  "tamil nadu": 500,
  "telangana": 400,
  "tripura": 50,
  "uttar pradesh": 200,
  "uttarakhand": 1200,
  "west bengal": 100,
  "chandigarh": 200,
  "lakshadweep": 5,
  "delhi": 220,
};
function api(state: string) {
    return "https://api.openweathermap.org/data/2.5/weather?q=" +
        state +
        "&units=metric&APPID=fcc8de7015bbb202209bbf0261babf4c";
}
export default App
