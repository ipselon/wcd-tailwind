import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import pickWithValues from '../utils/pickWithValues';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import PropTypes from 'prop-types';

export interface OptionProps {
    id?: string;
    globalAttrs?: GlobalProps;
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
    tailwindUtilities?: any;
    text?: string;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Option = ({ id, tailwindUtilities, text, globalAttrs, ...rest }: OptionProps) => {
    const globalAttrsProps = { id, ...pickWithValues(globalAttrs), ...pickWithValues(rest) };
    return (
        <HtmlElement tag="option" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {text}
        </HtmlElement>
    );
};

Option.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Whether the form control is disabled
     */
    disabled: PropTypes.bool,
    /**
     * This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.
     */
    label: PropTypes.string,
    /**
     * If present, this Boolean attribute indicates that the option is initially selected.
     */
    selected: PropTypes.bool,
    /**
     * The content of this attribute represents the value to be submitted with the form, should this option be selected.
     */
    value: PropTypes.string,
    /**
     * Text content value
     */
    text: PropTypes.string,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
};

Option.defaultProps = {
    value: 'option_value',
    text: 'Option value',
};

export default Option;
