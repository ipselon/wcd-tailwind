import React from 'react';
import PropTypes from 'prop-types';

export interface HtmlElementProps {

    htmlTag?: string;
    children?: React.ReactNode;
    tailWindClasses?: string;
}

export const HtmlElementTypes: PropTypes.InferProps<HtmlElementProps> = {
    /**
     * HTML Tag
     */
    htmlTag: PropTypes.oneOf([
        'div',
        'h1',
        'h2',
        'span',
        'p',
        'img'
    ]),
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailWindClasses: PropTypes.string,

};
