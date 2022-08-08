import React from "react"
import Greetings from "./Greetings";
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Greetings />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
