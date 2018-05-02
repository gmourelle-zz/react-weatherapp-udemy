import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import transformWeather from './../../services/transformWeather' ;
import PropTypes from 'prop-types'; 
import WeatherData from './WeatherData';
import './styles.css'


const api_key='77481c71948b5cab43a8dad2b6d564c5';
const url='http://api.openweathermap.org/data/2.5/weather';


class WeatherLocation extends Component{

    constructor({city}){
        super();
        this.state={
            city,
            data:null
        };
    }    

    
    componentWillMount() {
        const {city}=this.state;
        const api_weather=`${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data =>{
            return data.json();
        }).then(weather_data => {
        
            const data=transformWeather(weather_data);
            this.setState({data});
        });
    }

    render = () => { 
      
        const {onWeatherLocationClick}= this.props;
        const {city,data}=this.state;
        return(
                <div className='weatherLocationContent' onClick={onWeatherLocationClick}>
                    <Location city={city}/>
                   { data ? <WeatherData data={data}/> :  <CircularProgress size={60} thickness={7} />}                  
                </div>
        );
    };
}

WeatherLocation.propTypes={
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation