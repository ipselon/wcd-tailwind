import React from 'react';
import PropTypes from 'prop-types';

export interface HtmlElementProps {

    _htmlTag?: string;
    _children?: React.ReactNode;
    tailWindClasses?: string[];
}

export const HtmlElementTypes: PropTypes.InferProps<HtmlElementProps> = {
    /**
     * HTML Tag
     */
    _htmlTag: PropTypes.oneOf([
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
    _children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailWindClasses: PropTypes.arrayOf(PropTypes.string),

};
