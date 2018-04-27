import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

import { CLOUD } from "./../../../constants/weathers";
import './styles.css';

const WeatherData = () => (

    <div className='weatherDataContent'>
        <WeatherTemperature temperature={12} weatherState={CLOUD}/>
        <WeatherExtraInfo humidity={80} wind='10m/s'/>
    </div>
);


export default WeatherData;