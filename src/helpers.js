import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

export function transformHtml(html, textStyles) {
  return ReactHtmlParser(html, { transform: addStyle });

  function addStyle(node, index) {
    if (node.type === 'tag' && Object.getOwnPropertyNames(node.attribs).length > 0) {
      const nodeClass = transformClassnames(node.attribs.class); // could be undefined
      node.style += node.attribs['data-style-portfolio'];
      const reactNode = Object.assign(convertNodeToElement(node, index));
      let style = { ...textStyles[nodeClass], ...reactNode.props.style };
      if (node.name === 'div') style.display = 'block';
      const newStyledNode = React.cloneElement(reactNode, {style});
      return newStyledNode;
    }
  }
}

export function reactifyStyles(styles) {
  const newObject = {};
  for (var key in styles) {
    if (styles[key] !== null && typeof(styles[key])=="object") {
      newObject[key] = reactifyStyles(styles[key]);
    } else {
      newObject[underscoreToCamelcase(key)] = styles[key];
    }
  }
  return newObject;
}

function underscoreToCamelcase(str) {
  return str.replace(/(\_\w)/g, function(m){
      return m[1].toUpperCase();
  });
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

