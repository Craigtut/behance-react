import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class TextModule extends Component {

  render() {
    const { module, styles } = this.props;
    const render = ReactHtmlParser(module.text, { tranform: addStyle });
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

function addStyle(node) {
  console.log(node)
}

export default TextModule;