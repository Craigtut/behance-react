import React, { Component } from 'react';
import { reactifyStyles } from './helpers.js';
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
    <div id={`project-${project.id}`} style={{ background: processedStyles.background.color, color: processedStyles.text.paragraph.color }}>
      {modulesToRender}
    </div>
  );
}

