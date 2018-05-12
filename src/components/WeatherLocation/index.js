import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import PropTypes from 'prop-types'; 
import WeatherData from './WeatherData';
import './styles.css'


const WeatherLocation = ({city,data,onWeatherLocationClick}) =>(
                <div className='weatherLocationContent' onClick={onWeatherLocationClick}>
                    <Location city={city}/>
                   { data ? <WeatherData data={data}/> :  <CircularProgress size={60} thickness={7} />}                  
                </div>    
)

WeatherLocation.propTypes={
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherLocation