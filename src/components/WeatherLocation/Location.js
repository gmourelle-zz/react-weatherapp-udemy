import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'

//arrow function
/*Puede ser con parentesis y solo una linea o puede ser con llaves y poner un return
const Location = ({city}) => { //Destructuring ECMAscript
 
      
return(<div><h1>{city}</h1></div>);

};*/

const Location = ({city}) => (
       
    <div className='locationContent'>
        <h1>
            {city}
        </h1>
    </div>
    
);
    
Location.propTypes={
    city: PropTypes.string.isRequired,
};
export default Location;