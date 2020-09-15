import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import pickWithValues from '../utils/pickWithValues';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import PropTypes from 'prop-types';

export interface SelectProps {
    id?: string;
    globalAttrs?: GlobalProps;
    colSpan?: number;
    rowSpan?: number;
    tailwindUtilities?: any;
    children?: React.ReactNode;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Td = ({id, tailwindUtilities, children, globalAttrs, ...rest}: SelectProps) => {
    const globalAttrsProps = {id, ...pickWithValues(globalAttrs), ...pickWithValues(rest)};
    return (
        <HtmlElement tag="td" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Td.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * This attribute contains a non-negative integer value that indicates for how many columns the cell extends.
     * Its default value is 1.
     * Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
     */
    colSpan: PropTypes.number,
    /**
     * This attribute contains a non-negative integer value that indicates for how many rows the cell extends.
     * Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to.
     * Values higher than 65534 are clipped down to 65534.
     */
    rowSpan: PropTypes.number,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
};

Td.defaultProps = {
    children: [
        <span />
    ],
};

export default Td;
