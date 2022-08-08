import React from "react"
import PropTypes from "prop-types"
const Greetings = ()=>  {
  fetch('/api/greetings')
  .then((response) => response.json())
  .then((data) => console.log(data));
    return {
     
    };
  
}

Greetings.propTypes = {
  greeting: PropTypes.string
};
export default Greetings
