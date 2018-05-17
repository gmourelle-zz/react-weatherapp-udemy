import React from 'react'
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD,
    CLOUDY,
    SUN,
    RAIN ,
    WINDY, 
    SNOW,
    THUNDER,
    DRIZZLE} from "./../../../constants/weathers";

const stateToIconName = weatherState =>{

    switch (weatherState) {
        case WINDY:
            return "windy";
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "day-sunny";
           
    }

};

const getWeatherIcon= weatherState =>{

    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
}

const WeatherTemperature = ({temperature, weatherState}) => (
    
    <div className='weatherTemperatureContent'>
        {getWeatherIcon(weatherState)}    
    <span className='temperature'> {`${Math.round( temperature )}`}</span>
    <span className='temperaturetype'> C°</span>
    </div>    
);

WeatherTemperature.propTypes={
temperature: PropTypes.number.isRequired,
weatherState: PropTypes.string,
};

export default WeatherTemperature;