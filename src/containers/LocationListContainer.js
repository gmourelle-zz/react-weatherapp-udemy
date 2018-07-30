import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { getWeatherCities, getCity } from "./../reducers";
import LocationList from "./../components/LocationList";
import SearchBar from "./../components/SearchBar";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setSelectedCity, cities, city } = this.props;

    //setWeather(cities);

    //setSelectedCity(city);
  }

  handleSelectedLocation = city => {
    this.props.setSelectedCity(city);
  };

  render() {
    const { setWeather, setSelectedCity, cities, city } = this.props;

    return (
      <div>
        <SearchBar setWeather={setWeather} />
        <LocationList
          cities={this.props.citiesWeather}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/*const mapDispatchToProps = dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});*/

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
