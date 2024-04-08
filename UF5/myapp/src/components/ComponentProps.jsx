import { useState } from 'react'
import PropTypes from 'prop-types'

const ComponentProps = ({prop1, num1}) => 
{

	return (
	<>
		<h4>Gestió de Propietats</h4>	
        <div>
            <p>{prop1}</p>
            <p>Numero : {num1}</p>
        </div>
    </>
	)
}

ComponentProps.propTypes = {
    prop1: PropTypes.string.isRequired,
    num1: PropTypes.number,
};

ComponentProps.defaultProps = {
    num1: 2,
};

export default ComponentProps;