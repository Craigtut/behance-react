import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

const embedStyle = {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
};
const videoContainerStyle = {
  paddingTop: '56.25%',
  height: 0,
  position: 'relative',
}
const containerStyle = {
  maxHeight: '100%',
  maxWidth: '100%',
}

class EmbedModule extends Component {
  render() {
    const { module, styles } = this.props;
    let renderEmbed = ReactHtmlParser(module.embed);
    if (module.full_bleed) {
      renderEmbed = React.cloneElement(renderEmbed[0], {style: embedStyle});
      return (
        <div style={styles.spacing.modules}>
          <div style={containerStyle}>
            <div style={videoContainerStyle}>
              {renderEmbed}
            </div>
          </div>
        </div>
      );
    }
    return (
      <Container style={{...styles.spacing.modules, display: 'flex', justifyContent: 'center'}}>
        {renderEmbed}
      </Container>
    );
  }
}

EmbedModule.propTypes = {
  module: PropTypes.object,
};

export default EmbedModule;