import React from 'react';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';
import pickWithValues from '../utils/pickWithValues';

/**
 * HTML element component
 */
const HtmlElement = (props: any) => {
    const { tailwindUtilities, children, tag, ...rest } = props;

    let restProperties = pickWithValues(rest);
    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        restProperties.className = className.trim();
    }

    return React.createElement(tag || 'div', restProperties, children);
};

export default HtmlElement;
