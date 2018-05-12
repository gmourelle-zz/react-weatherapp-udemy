import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity, setWeather} from './../actions';
import {getWeatherCities} from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }
    

    handleSelectedLocation = city =>{
        //this.setState({city});//destructuring. No haría falta asignarle el valor a la prop. Con las llaves y el mismo nombre ya lo asigna
     
         this.props.setCity(city); //dispatch ayuda a disparar la accion
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
citiesWeather: getWeatherCities(state)});


//el segundo parámetro sería para conectar las actions con el container
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
