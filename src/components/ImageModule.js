import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageModule extends Component {
  render() {
    const { module, styles } = this.props;
    const style = styles.spaceing.modules;
    style.marginBottom = '-4px';
    if (module.full_bleed) {
      return (
        <div fluid style={style}>
          <img src={module.sizes.max_1920} style={{ width: '100%' }} />
        </div>
      );
    }
    return (
      <div style={{ ...style, ...{ padding: '0 10%' }}}>
        <img src={module.sizes.max_1920} style={{ width: '100%' }} />
      </div>
    );
  }
}

ImageModule.propTypes = {
  module: PropTypes.object,
};

export default ImageModule;