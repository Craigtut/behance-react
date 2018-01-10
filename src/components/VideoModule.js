import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

class TextModule extends Component {
  render() {
    const { module, styles } = this.props;
    const renderVideo = ReactHtmlParser(module.embed);
    if (module.full_bleed) {
      return (
        <Container fluid style={styles.spacing.modules}>
          {renderVideo}
        </Container>
      );
    }
    return (
      <Container style={styles.spacing.modules}>
        {renderVideo}
      </Container>
    );
  }
}

TextModule.propTypes = {
  module: PropTypes.object,
};

export default TextModule;