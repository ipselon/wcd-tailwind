import get from 'lodash/get';

function getClassNameFromShaped (
  props,
  path,
) {
  let result = '';
  let propertyArray = get(props, path, []);
  if (propertyArray && propertyArray.length > 0) {
    let className;
    for (let i = 0; i < propertyArray.length; i++) {
      const { a_class, b_responsive, c_modifier, d_modifier } = propertyArray[i];
      className = '';
      if (a_class) {
        if (c_modifier) {
          className += `${c_modifier}:`;
        }
        if (d_modifier) {
          className += `${d_modifier}:`;
        }
        if (b_responsive) {
          className += `${b_responsive}:`;
        }
        className += a_class;
      }
      result += ` ${className}`;
    }
  }
  return result;
}

export default getClassNameFromShaped;
