import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';

class ImageModule extends Component {
  render() {
    const { module, styles } = this.props;
    const style = Object.assign({}, styles.spacing.modules);
    style.marginBottom = (style.marginBottom === 0) ? '-4px' : style.marginBottom;
    if (module.full_bleed) {
      return (
        <Container fluid style={style}>
          <img src={module.sizes.max_1920} style={{ width: '100%' }} />
        </Container>
      );
    }
    return (
      <Container style={style}>
        <img src={module.sizes.max_1920} style={{ width: '100%' }} />
      </Container>
    );
  }
}

ImageModule.propTypes = {
  module: PropTypes.object,
};

export default ImageModule;