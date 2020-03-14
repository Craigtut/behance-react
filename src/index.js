import React, { Component } from 'react';
import { reactifyStyles } from './helpers.js';
import ImageModule from './components/ImageModule';
import TextModule from './components/TextModule';
import VideoModule from './components/VideoModule';
import EmbedModule from './components/EmbedModule';
import CollectionModule from './components/CollectionModule';

export function renderProject(project) {
  console.log('Here is project data test', project)
  const modules = project.modules;
  const processedStyles = reactifyStyles(project.styles);
  const modulesToRender = modules.map((module, index) => {
    const key = `${project.id}-module-${index}`;
    switch (module.type) {
      case 'text':
        return <TextModule key={key} module={module} styles={processedStyles} />
      case 'image':
       return <ImageModule key={key} module={module} styles={processedStyles} />
      case 'media_collection':
        return <CollectionModule key={key} module={module} styles={processedStyles} />
      case 'video':
        return <VideoModule key={key} module={module} styles={processedStyles} />
      case 'embed':
        return <EmbedModule key={key} module={module} styles={processedStyles} />
      default:
        return null;
    }
  });
  return (
    <div id={`project-${project.id}`} key={`project-${project.id}`} style={{ background: `#${processedStyles.background.color}`, color: processedStyles.text.paragraph.color }}>
      {modulesToRender}
    </div>
  );
}

