import React from 'react'
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD , CLOUDY, SUN, RAIN} from "./../../../constants/weathers";

const stateToIconName = weatherState =>{

    switch (weatherState) {
        case CLOUD:
            return "cloud";
          
        case CLOUDY:
            return "cloudy";
         
        case SUN:
            return "day-sunny";
           
        case RAIN:
            return "rain";
           
        default:
        return "windy";
           
    }

};

const getWeatherIcon=weatherState=>{

    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
}

const WeatherTemperature = ({temperature, weatherState}) => (
    
    <div className='weatherTemperatureContent'>
        {getWeatherIcon(weatherState)}    
    <span className='temperature'> {`${temperature} C `}</span>
    <span className='temperaturetype'> C</span>
    </div>    
);

WeatherTemperature.propTypes={
temperature: PropTypes.number.isRequired,
weatherState: PropTypes.string,
};

export default WeatherTemperature;