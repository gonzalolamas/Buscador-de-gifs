import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            //console.log('sbmit por defecto')
            // setCategories
            setCategories( cats => [...cats, inputValue])
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
      <input 
      type='text'
      value={inputValue}
      onChange={handleInputChange}
      />
    </form>
  );


};

//proptypes funcion requerida para este componente
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}