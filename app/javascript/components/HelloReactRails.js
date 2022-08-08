import React from "react"
import PropTypes from "prop-types"
class HelloReactRails extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloReactRails.propTypes = {
  greeting: PropTypes.string
};
export default HelloReactRails
