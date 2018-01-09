import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import Container from 'react-grid-system';

class ImageModule extends Component {
  render() {
    const { module, styles } = this.props;
    console.log(module)
    if (module.full_bleed) {
      return (
        <Container fluid style={styles.spacing.modules}>
          <img src={module.sizes.max_1920} style={{ width: '100%' }} />
        </Container>
      );
    }
    return (
      <Container style={styles.spacing.modules}>
        <img src={module.sizes.max_1920} style={{ width: '100%' }} />
      </Container>
    );
  }
}

ImageModule.propTypes = {
  module: PropTypes.object,
};

export default ImageModule;