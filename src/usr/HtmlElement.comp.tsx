import get from 'lodash/get';
import React from 'react';
import {HtmlElementProps, HtmlElementTypes} from './HtmlElement.props';
import getPropsWithValues from "./utils/getPropsWithValues";

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const HtmlElement = (props: HtmlElementProps) => {

    // __htmlAttributes
    const htmlAttributesProps = getPropsWithValues(props, [
        {
            path: '__htmlAttributes.img.src', attrName: 'src'
        }
    ]);

    let elementProps: any = {
        'data-gen': 'tailwindcss',
        ...htmlAttributesProps
    };

    let classNames = '';
    const {tailWindClasses} = props;
    if (tailWindClasses && tailWindClasses.length > 0) {
        classNames = tailWindClasses.join(' ').trim();
    }
    if (classNames) {
        elementProps.className = classNames;
    }

    const htmlTag: string = get(props, '_htmlTag', 'div');
    switch (htmlTag) {
        case 'img':
            return React.createElement(htmlTag, elementProps);
        default:
            return React.createElement(htmlTag, elementProps, props._children);
    }
};

HtmlElement.propTypes = HtmlElementTypes;

HtmlElement.defaultProps = {
    _children: [
        <span />
    ],
};

export default HtmlElement;
