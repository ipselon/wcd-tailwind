import get from 'lodash/get';
import React from 'react';
import {HtmlElementProps, HtmlElementTypes} from './HtmlElement.props';
import constructTailWindClassesString from './utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const HtmlElement = (props: HtmlElementProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailWindClasses } = props;

    let className = constructTailWindClassesString(tailWindClasses);
    if (className) {
        elementProps.className = className.trim();
    }

    const htmlTag: string = get(props, 'htmlTag', 'div');
    switch (htmlTag) {
        case 'img':
            return React.createElement(htmlTag, elementProps);
        default:
            return React.createElement(htmlTag, elementProps, props.children);
    }
};

HtmlElement.propTypes = HtmlElementTypes;

HtmlElement.defaultProps = {
    children: [
        <span />
    ],
};

export default HtmlElement;
