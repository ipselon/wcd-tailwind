import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import pickWithValues from '../utils/pickWithValues';

export interface InputProps {
    id?: string;
    globalAttrs?: GlobalProps;
    type?: string;
    accept?: string;
    alt?: string;
    autocomplete?: boolean;
    autofocus?: boolean;
    checked?: boolean;
    dirname?: string;
    disabled?: boolean;
    form?: string;
    min?: number;
    max?: number;
    maxlength?: number;
    minlength?: number;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number;
    value?: string;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Input = ({
                   id,
                   tailwindUtilities,
                   globalAttrs,
                   type,
                   accept,
                   alt,
                   autocomplete,
                   autofocus,
                   checked,
                   dirname,
                   disabled,
                   form,
                   min,
                   max,
                   maxlength,
                   minlength,
                   name,
                   pattern,
                   placeholder,
                   readonly,
                   required,
                   size,
                   src,
                   step,
                   value,
               }: InputProps) => {
    const properties = {
        id,
        ...pickWithValues(globalAttrs),
        ...pickWithValues({
            type,
            accept,
            alt,
            autocomplete,
            autofocus,
            checked,
            dirname,
            disabled,
            form,
            min,
            max,
            maxlength,
            minlength,
            name,
            pattern,
            placeholder,
            readonly,
            required,
            size,
            src,
            step,
            value,
        })
    };
    return (
        <HtmlElement
            tag="input"
            tailwindUtilities={tailwindUtilities}
            {...properties}
        />
    );
};

Input.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * How an <input> works varies considerably depending on the value of its type attribute.
     * * `button` - a push button with no default behavior displaying the value of the value attribute, empty by default.
     * * `checkbox` - a check box allowing single values to be selected/deselected.
     * * `color` - a control for specifying a color; opening a color picker when active in supporting browsers.
     * * `date` - a control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
     * * `datetime-local` - a control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.
     * * `email` - a field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
     * * `file` - a control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
     * * `hidden` - a control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!
     * * `image` - a graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.
     * * `month` - a control for entering a month and year, with no time zone.
     * * `number` - a control for entering a number. Displays a spinner and adds default validation when supported. Displays a numeric keypad in some devices with dynamic keypads.
     * * `password` - a single-line text field whose value is obscured. Will alert user if site is not secure.
     * * `radio` - a radio button, allowing a single value to be selected out of multiple choices with the same name value.
     * * `range` - a control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.
     * * `reset` - a button that resets the contents of the form to default values. Not recommended.
     * * `search` - a single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
     * * `submit` - a button that submits the form.
     * * `tel` - a control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
     * * `text` - a single-line text field. Line-breaks are automatically removed from the input value.
     * * `time` - a control for entering a time value with no time zone.
     * * `url` - a field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
     * * `week` - a control for entering a date consisting of a week-year number and a week number with no time zone.
     */
    type: PropTypes.oneOf([
        '',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
    ]),
    /**
     * Hint for expected file type in file upload controls
     */
    accept: PropTypes.string,
    /**
     * `alt` attribute for the image type. Required for accessibility
     */
    alt: PropTypes.string,
    /**
     * Hint for form autofill feature
     */
    autocomplete: PropTypes.bool,
    /**
     * Automatically focus the form control when the page is loaded
     */
    autofocus: PropTypes.bool,
    /**
     * Whether the command or control is checked. Valid for both radio and checkbox types.
     */
    checked: PropTypes.bool,
    /**
     * Name of form field to use for sending the element's directionality in form submission
     */
    dirname: PropTypes.string,
    /**
     * Whether the form control is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Associates the control with a form element
     */
    form: PropTypes.string,
    /**
     * Minimum value
     */
    min: PropTypes.number,
    /**
     * Maximum value
     */
    max: PropTypes.number,
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
     * Pattern the `value` must match to be valid. The pattern attribute, when specified, is a regular expression that the input's value must match in order for the value to pass constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type, and as documented in our guide on regular expressions.
     */
    pattern: PropTypes.string,
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
     * Size of the control. Valid for email, password, tel, and text input types only. Specifies how much of the input is shown. Basically creates same result as setting CSS width property with a few specialities. The actual unit of the value depends on the input type.
     */
    size: PropTypes.number,
    /**
     * Same as src attribute for `<img>` address of image element
     */
    src: PropTypes.string,
    /**
     * Incremental values that are valid.
     */
    step: PropTypes.number,
    /**
     * The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective HTMLInputElement object's value property. The value attribute is always optional, though should be considered mandatory for checkbox, radio, and hidden.
     */
    value: PropTypes.string,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
};

Input.defaultProps = {
    type: 'text',
    placeholder: 'Enter text',
};

export default Input;
