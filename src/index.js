import React, { Component } from 'react';
import ImageModule from './components/ImageModule';
import TextModule from './components/TextModule';
import VideoModule from './components/VideoModule';

export function renderProject(project) {
  console.log('Here is project data', project)
  const modules = project.modules;
  const processedStyles = reactifyStyles(project.styles);
  const modulesToRender = modules.map((module) => {
    switch (module.type) {
      case 'text':
        return <TextModule module={module} styles={processedStyles} />
      case 'image':
       return <ImageModule module={module} styles={processedStyles} />
      case 'video':
        return <VideoModule module={module} styles={processedStyles} />
      default:
        return null;
    }
  });
  return (
    <div style={processedStyles.background}>
      {modulesToRender}
    </div>
  );
}

function reactifyStyles(styles) {
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