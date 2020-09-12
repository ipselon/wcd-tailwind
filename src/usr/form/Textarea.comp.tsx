import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import pickWithValues from '../utils/pickWithValues';

export interface TextareaProps {
    id?: string;
    globalAttrs?: GlobalProps;
    autocomplete?: boolean;
    autofocus?: boolean;
    cols?: number;
    disabled?: boolean;
    form?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    text?: string;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Textarea = ({
                      id,
                      tailwindUtilities,
                      globalAttrs,
                      text,
                      ...rest
                  }: TextareaProps) => {
    const properties = {
        id,
        ...pickWithValues(globalAttrs),
        ...pickWithValues(rest)
    };
    return (
        <HtmlElement
            tag="textarea"
            tailwindUtilities={tailwindUtilities}
            {...properties}
        >
            {text}
        </HtmlElement>
    );
};

Textarea.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Automatically focus the form control when the page is loaded
     */
    autofocus: PropTypes.bool,
    /**
     * The visible width of the text control, in average character widths.
     */
    cols: PropTypes.number,
    /**
     * Whether the form control is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Associates the control with a form element
     */
    form: PropTypes.string,
    /**
     * Maximum length (number of characters) of `value`
     */
    maxlength: PropTypes.number,
    /**
     * Minimum length (number of characters) of `value`
     */
    minlength: PropTypes.number,
    /**
     * Name of the form control. Submitted with the form as part of a name/value pair.
     */
    name: PropTypes.string,
    /**
     * Text that appears in the form control when it has no value set
     */
    placeholder: PropTypes.string,
    /**
     * The value is not editable
     */
    readonly: PropTypes.bool,
    /**
     * A value is required or must be check for the form to be submittable
     */
    required: PropTypes.bool,
    /**
     * The number of visible text lines for the control.
     */
    rows: PropTypes.number,
    /**
     * The input control's value.
     */
    text: PropTypes.string,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
};

Textarea.defaultProps = {
    rows: 4,
    placeholder: 'Enter text',
};

export default Textarea;
