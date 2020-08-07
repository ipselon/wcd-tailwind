import get from 'lodash/get';
import React from 'react';
import {ElementProps, ElementTypes} from './Element.props';
import constructTailWindClassesString from './utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Element = (props: ElementProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
        ...props.attributes
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    const htmlTag: string = get(props, 'tag', 'div');
    let validChildren: React.ReactNode = props.children;
    if (props.texts && (props.texts).length > 0) {
        validChildren = props.texts;
    }
    return React.createElement(htmlTag, elementProps, validChildren);
};

Element.propTypes = ElementTypes;

Element.defaultProps = {
    tag: 'div',
    children: [
        <span />
    ],
};

export default Element;
