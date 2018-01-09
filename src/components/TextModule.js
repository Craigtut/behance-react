import { h, Component } from 'preact';
import PropTypes from 'prop-types';

class TextModule extends Component {
  render() {
    const { module, styles } = this.props;
    console.log(module)
    return (
      <div style={styles.spacing.modules}>
        Text Module
      </div>
    );
  }
}

TextModule.propTypes = {
  module: PropTypes.object,
};

export default TextModule;