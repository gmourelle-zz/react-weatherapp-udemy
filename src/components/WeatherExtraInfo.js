
import React from 'react'

const WeatherExtraInfo = ({humidity,wind}) => (
    /*
        Template String o template literal
    */

    <div>
        <span>
            {`${humidity} % | `}
        </span>
        <span>
            {`${wind} wind`}
        </span>
    </div>
    
);

export default WeatherExtraInfo;