import { transformHtml, reactifyStyles } from '../src/helpers';
import project from './project.json';

test('Appends the styles to the node', () => {
  const styles = reactifyStyles(project.styles)
  const result = transformHtml(project.modules[1].text, styles.text)
  expect(result.length).toBe(4);
});

test('Reactify styles', () => {
  const styles = reactifyStyles(project.styles)
  expect(styles.spacing.modules).toEqual({"marginBottom": 0});
});