import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageModule extends Component {
  render() {
    const { module, styles } = this.props;
    console.log(module)
    if (module.full_bleed) {
      return (
        <div fluid style={styles.spacing.modules}>
          <img src={module.sizes.max_1920} style={{ width: '100%' }} />
        </div>
      );
    }
    return (
      <div style={{ ...styles.spacing.modules, ...{ padding: '0 10%' }}}>
        <img src={module.sizes.max_1920} style={{ width: '100%' }} />
      </div>
    );
  }
}

ImageModule.propTypes = {
  module: PropTypes.object,
};

export default ImageModule;