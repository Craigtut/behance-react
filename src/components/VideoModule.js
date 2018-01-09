import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextModule extends Component {
  render() {
    const { module, styles } = this.props;
    console.log(module)
    return (
      <div style={styles.spacing.modules}>
        Video Module
      </div>
    );
  }
}

TextModule.propTypes = {
  module: PropTypes.object,
};

export default TextModule;