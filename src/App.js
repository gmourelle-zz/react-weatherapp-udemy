import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Row, Col, Grid } from "react-flexbox-grid";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtendedContainer />
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
