
import React from 'react'
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity,wind}) => (
    /*
        Template String o template literal
    */

    <div className='weatherExtraInfoContent'>
        <span className='extraInfoText'>
            {`Humedad: ${humidity} % `}
        </span>
        <span className='extraInfoText'>
            {`Vientos: ${wind}`}
        </span>
    </div>
    
);

WeatherExtraInfo.propTypes={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;