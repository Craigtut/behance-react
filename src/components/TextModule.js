import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transformHtml } from '../helpers';
import { Container } from 'react-grid-system';


class TextModule extends Component {
  render() {
    const { module, styles } = this.props;
    const render = transformHtml(module.text, styles.text);
    return (
      <Container style={styles.spacing.modules}>
        {render}
      </Container>
    );
  }
}

TextModule.propTypes = {
  module: PropTypes.object,
};


export default TextModule;