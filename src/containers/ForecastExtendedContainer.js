import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (            
                this.props.city && /* con este simbolo evalua que si es NULL no renderice */
                <ForecastExtended city={this.props.city}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });
  

export default connect(mapStateToProps, null)(ForecastExtendedContainer);