import axios from "axios";

export function getInfo(payload){
    return function (dispatch){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_APIKEY}&units=metric`)
        .then(response => {
            console.log(response.data);
            const weather = {
                name: response.data.name,
                temp: Math.round(response.data.main.temp),
                tempMin:Math.round(response.data.main.temp_min),
                tempMax: Math.round(response.data.main.temp_max),
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                weather: response.data.weather[0].main,
            }
            dispatch({
                type: "GET_ALL_INFO",
                payload: weather
            })
        })
        .catch(error => {
            alert("ciudad no encontrada");
        })
    }
}