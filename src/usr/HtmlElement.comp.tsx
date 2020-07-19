import get from 'lodash/get';
import React from 'react';
import {HtmlElementProps, HtmlElementTypes} from './HtmlElement.props';
import getPropsWithValues from "./utils/getPropsWithValues";

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const HtmlElement = (props: HtmlElementProps) => {

    const validProps = getPropsWithValues(props, [{
        path: 'tailWindClasses',
        attrName: 'className'
    }]);

    let elementProps: any = {
        'data-gen': 'tailwindcss',
        ...validProps
    };

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
