import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import pickWithValues from '../utils/pickWithValues';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import PropTypes from 'prop-types';

export interface SelectProps {
    id?: string;
    globalAttrs?: GlobalProps;
    span?: number;
    tailwindUtilities?: any;
    children?: React.ReactNode;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Col = ({id, tailwindUtilities, children, globalAttrs, ...rest}: SelectProps) => {
    const globalAttrsProps = {id, ...pickWithValues(globalAttrs), ...pickWithValues(rest)};
    return (
        <HtmlElement tag="col" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Col.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans.
     * If not present, its default value is 1.
     */
    span: PropTypes.number,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
};

Col.defaultProps = {
    children: [
        <span />
    ],
};

export default Col;
