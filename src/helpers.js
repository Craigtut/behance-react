import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

export function transformHtml(html, textStyles) {
  return ReactHtmlParser(html, { transform: addStyle });

  function addStyle(node, index) {
    if (node.type === 'tag' && Object.getOwnPropertyNames(node.attribs).length > 0) {
      let nodeClass = transformClassnames(node.attribs.class); // could be undefined
      if( node.name === 'a') nodeClass = 'link';
      if(node.attribs['data-style-portfolio']) node.style += node.attribs['data-style-portfolio'];

      const reactNode = Object.assign(convertNodeToElement(node, index, addStyle));
      let style = { ...textStyles[nodeClass], ...reactNode.props.style };
      if (node.name === 'div') style.display = 'block';

      return React.cloneElement(reactNode, {style});
    }
  }
}

export function reactifyStyles(styles) {
  const newObject = {};
  for (var key in styles) {
    if (styles[key] !== null && typeof(styles[key])=="object") {
      newObject[key] = reactifyStyles(styles[key]);
    } else {
      let newKey = key;
      if (key === 'bottom_margin' || key === 'top_margin') newKey = key.split('_').reverse().join('_');
      newKey = underscoreToCamelcase(newKey);
      newObject[newKey] = styles[key];
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

