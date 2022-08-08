import React from "react"
import PropTypes from "prop-types"
import Greetings from "./Greetings";
class HelloReactRails extends React.Component {
  render () {
    return (
      <React.Fragment>
       <Greetings/>
      </React.Fragment>
    );
  }
}

HelloReactRails.propTypes = {
  greeting: PropTypes.string
};
export default HelloReactRails
