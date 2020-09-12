import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import pickWithValues from '../utils/pickWithValues';

export interface SvgProps {
    id?: string;
    globalAttrs?: GlobalProps;
    viewBox?: string;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Svg = ({
                id,
                tailwindUtilities,
                children,
                viewBox,
                globalAttrs
            }: SvgProps) => {
    return (
        <HtmlElement
            id={id}
            tag="svg"
            tailwindUtilities={tailwindUtilities}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            {...pickWithValues(globalAttrs)}
        >
            {children}
        </HtmlElement>
    );
};

Svg.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Defines the position and dimension, in user space, of an SVG viewport.
     *
     * The value of the viewBox attribute is a list of four numbers: min-x, min-y, width and height. The numbers separated by whitespace and/or a comma, which specify a rectangle in user space which is mapped to the bounds of the viewport established for the associated SVG element
     */
    viewBox: PropTypes.string,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};

Svg.defaultProps = {
    children: [
        <span/>
    ],
};

export default Svg;
