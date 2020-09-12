import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import pickWithValues from '../utils/pickWithValues';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import PropTypes from 'prop-types';

export interface SelectProps {
    id?: string;
    globalAttrs?: GlobalProps;
    autocomplete?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    tailwindUtilities?: any;
    children?: React.ReactNode;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Select = ({id, tailwindUtilities, children, globalAttrs, ...rest}: SelectProps) => {
    const globalAttrsProps = {id, ...pickWithValues(globalAttrs), ...pickWithValues(rest)};
    return (
        <HtmlElement tag="select" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Select.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * A DOMString providing a hint for a user agent's autocomplete feature.
     */
    autocomplete: PropTypes.bool,
    /**
     * Automatically focus the form control when the page is loaded
     */
    autofocus: PropTypes.bool,
    /**
     * Whether the form control is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Associates the control with a form element
     */
    form: PropTypes.string,
    /**
     * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.
     */
    multiple: PropTypes.bool,
    /**
     * Name of the form control. Submitted with the form as part of a name/value pair.
     */
    name: PropTypes.string,
    /**
     * A value is required or must be check for the form to be submittable
     */
    required: PropTypes.bool,
    /**
     * If the control is presented as a scrolling list box (e.g. when multiple is specified), this attribute represents the number of rows in the list that should be visible at one time.
     */
    size: PropTypes.number,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
};

Select.defaultProps = {
    children: [
        <span />
    ],
};

export default Select;
