import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import transformWeather from './../../services/transformWeather' ;
import propTypes from 'prop-types'; 
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
            console.log("constructor");
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

    componentDidMount() {
        console.log("componentDidMount");
    }
    
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    render = () => {
        console.log("render");
        const {city,data}=this.state;
        return(
                <div className='weatherLocationContent'>
                    <Location city={city}/>
                   { data ? <WeatherData data={data}/> :  <CircularProgress size={60} thickness={7} />}
                  
                </div>
        );
    };
}

WeatherLocation.propTypes={
    city: propTypes.string,
}

export default WeatherLocation