import axios from "axios"
import { useState } from 'react'

   

function Home(){

   const [weather,setWeather]=useState("")

   const params = {
    access_key: 'f0c6c3d64443d33c77e7042a1bc71bcc',
    query: 'New York',
    units: 'f'
   }

    function handleWeather(){
        axios.get('http://api.weatherstack.com/current',{params})
        .then(res =>{
            return(
                console.log(res),
                setWeather(
                    res.data.location.name +" ," 
                    +res.data.location.country + "." 
                    + " Temperature: " +
                     res.data.current.temperature + " Fahrenheit")
            )
        }).catch(err=>{
            console.log(err)
        })

    }

    return (
        <>
            <div className="weather">
                <h1>Welcome</h1>
                <h3>this is the weather for New York</h3>
                <button className="btn" onClick={handleWeather}>click for weather</button>
                <p className="weather-p">{weather}</p>
            </div>
        </>
    )
}

export default Home