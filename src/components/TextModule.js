import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transformHtml } from '../helpers';


class TextModule extends Component {
  render() {
    const { module, styles } = this.props;
    const render = transformHtml(module.text, styles.text);
    return (
      <div style={{ ...styles.spacing.modules, ...{ padding: '0 10%' }}}>
        {render}
      </div>
    );
  }
}

TextModule.propTypes = {
  module: PropTypes.object,
};


export default TextModule;