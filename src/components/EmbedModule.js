import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

class EmbedModule extends Component {
  render() {
    const { module, styles } = this.props;
    const renderVideo = ReactHtmlParser(module.embed);
    if (module.full_bleed) {
      return (
        <div style={styles.spacing.modules}>
          {renderVideo}
        </div>
      );
    }
    return (
      <Container style={styles.spacing.modules}>
        {renderVideo}
      </Container>
    );
  }
}

EmbedModule.propTypes = {
  module: PropTypes.object,
};

export default EmbedModule;