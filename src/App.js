import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col, Grid} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import './App.css';

const cities=[
  'Bristol,gb',
  'Buenos Aires,ar',
  'Bogota,col',
  'Madrid,es'
];

class App extends Component {

  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);

  };

  render() {
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
                <div className='detail'></div>
              </Paper>
            </Col>
          </Row>                  
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;

