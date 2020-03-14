import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '100%',
}

class ImageModule extends Component {
  renderInner() {
    const { module } = this.props;
    return (
      <React.Fragment>
        {module.components.map((component) => {
          const imageStyle = {
            display: 'flex',
            flexGrow: component.flex_width,
            width: `${component.flex_width}px`,
            margin: '2px',
          }
          return (
            <div style={imageStyle}>
              <img style={{ width: '100%' }} src={component.sizes.hd} alt={component.alt_text} />
            </div>
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    const { module, styles } = this.props;

    if (module.full_bleed) {
      return (
        <div style={containerStyle}>
          {this.renderInner()}
        </div>
      );
    }
    return (
      <Container style={containerStyle}>
        {this.renderInner()}
      </Container>
    );
  }
}

ImageModule.propTypes = {
  module: PropTypes.object,
};

export default ImageModule;