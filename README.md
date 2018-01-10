# Behance React Render

The goal of this project is to start providing ready built components to render out various elements from Behance's API. 

> If you are looking instead for a way to pull data down from behance, check out my [Behance API](https://github.com/Craigtut/behance) project instead

## Installation

```
npm install behance-react -save
```

... or yarn


## Projects

The first phase of the project is to easily render out a project in its entirety once it has been pulled down from Behance.

Basic Usage
```javascript
import { renderProject } from 'behance-react';

class Project extends Component {
  render() {
    const { project } = this.state; // Get behance project data from somewhere
    const projectRender = renderProject(project);
    return (
      <div>
        {projectRender}
      </div>
    );
  }
}

```