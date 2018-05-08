import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col, Grid} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import './App.css';

const cities=[
  'Bristol,gb',
  'Buenos Aires,ar',
  'Bogota,col',
  'Madrid,es'
];



class App extends Component {

  constructor() {
    super();
    this.state={city:null};
  }

  handleSelectedLocation = city =>{
   this.setState({city});//destructuring. No haría falta asignarle el valor a la prop. Con las llaves y el mismo nombre ya lo asigna

    this.props.setCity(city); //dispatch ayuda a disparar la accion
  };

  render() {

    const {city}=this.state;

    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
             <AppBar title='Weather App'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    city && /* con este simbolo evalua que si es NULL no renderice */
                      <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>

              </Paper>
            </Col>
          </Row>                  
        </Grid>
      </MuiThemeProvider>
    );
  }
}

App.propTypes={

  setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => (
  {
    setCity: value => dispatch(setCity(value))
  }
);

export default connect(null, mapDispatchToPropsActions)(App);


