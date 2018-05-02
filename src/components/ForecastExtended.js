import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days=[
'Lunes',
'Martes',
'Miercoles',
'Jueves',
'Viernes',
'Sabado',
'Domingo'
]

class ForecastExtended extends Component{

    renderItemsDays(){
        
        return days.map(day => (<ForecastItem weekDay={day}></ForecastItem>));
    }

    render (){

        const {city}=this.props;
        return(
                <div>
                        <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                        {this.renderItemsDays()}
                </div>
            )
    }
}


ForecastExtended.propTypes = 
{
    city: PropTypes.string.isRequired,
}


export default ForecastExtended