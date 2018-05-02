import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col, Grid} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

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

export default App;

