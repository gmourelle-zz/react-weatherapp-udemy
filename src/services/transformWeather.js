import convert from 'convert-units';
import { 
    CLOUDY,
    SUN,
    RAIN ,
     
    SNOW,
    THUNDER,
    DRIZZLE } from "./../constants/weathers";

const getTemp = kelvin =>{

    return Number(convert(kelvin).from('K').to('C').toFixed(0));
}

const getWeatherState = weather =>{

    const {id}=weather[0];
    switch (id) {
    case id > 300:
        return THUNDER;
    case id < 400:
        return DRIZZLE;
    case id<600:
        return RAIN;
    case id < 700:
        return SNOW;
    case id === 800:
        return SUN;
    default:
    return CLOUDY;
}
}

const transformWeather= weather_data =>{
    const {weather}= weather_data;
    const {humidity,temp}=weather_data.main;
    const{speed}=weather_data.wind;
    const weatherState=getWeatherState(weather);
    const temperature = getTemp(temp);

    const data={
        temperature,
        weatherState,
        humidity,
        wind:`${speed}m/s`,
    };
    return data;
}

export default transformWeather;