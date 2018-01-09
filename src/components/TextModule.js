import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class TextModule extends Component {

  addStyle(node, index) {
    if (node.type === 'tag' && Object.getOwnPropertyNames(node.attribs).length > 0) {
      const nodeClass = transformClassnames(node.attribs.class); // could be undefined
      const reactNode = convertNodeToElement(node, index, transform);
      console.log(reactNode)
      reactNode.style = { ...reactNode.style, ...this.styles.text[nodeClass]};
      return reactNode;
    }
  }

  render() {
    const { module, styles } = this.props;
    console.log('reup')
    const render = ReactHtmlParser(module.text, { transform: this.addStyle });
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

function isEmptyObject(obj) {
  for(var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}

function transformClassnames(className) {
  switch (className) {
    case 'main-text':
      return 'paragraph';
    case 'sub-title':
      return 'subtitle';
    default:
      return className;
  }
}

export default TextModule;