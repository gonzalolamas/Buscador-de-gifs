import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit prueba', inputValue)

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>{inputValue}</span>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

//proptypes funcion requerida para este componente
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
