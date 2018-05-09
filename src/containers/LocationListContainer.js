import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {

    handleSelectedLocation = city =>{
        //this.setState({city});//destructuring. No haría falta asignarle el valor a la prop. Con las llaves y el mismo nombre ya lo asigna
     
         this.props.setCity(city); //dispatch ayuda a disparar la accion
    };

    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
      setCity: value => dispatch(setCity(value))
    }
);
  
//el segundo parámetro sería para conectar las actions con el container
export default connect(null, mapDispatchToProps)(LocationListContainer);
