import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import pickWithValues from '../utils/pickWithValues';

export interface ButtonProps {
    globalAttrs?: GlobalProps;
    autofocus?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    type?: string;
    children?: React.ReactNode;
    text?: string;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Button = ({
                    tailwindUtilities,
                    globalAttrs,
                    children,
                    text,
    autofocus,
    disabled,
    name,
    value,
    type
                }: ButtonProps) => {
    const properties = {
        ...pickWithValues(globalAttrs), ...pickWithValues({autofocus, disabled, name, value, type})
    };
    return (
        <HtmlElement
            tag="button"
            tailwindUtilities={tailwindUtilities}
            {...properties}
        >
            {React.Children.count(children) > 0 ? children : text}
        </HtmlElement>
    );
};

Button.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * An array of the nested HTML elements.
     * > If there is an element in the children property the text is not rendered.
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Text content value.
     * > If there is an element in the children property the text is not rendered.
     */
    text: PropTypes.string,
    /**
     * This Boolean attribute specifies that the button should have input focus when the page loads.
     * Only one element in a document can have this attribute.
     */
    autofocus: PropTypes.bool,
    /**
     * This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
     */
    disabled: PropTypes.bool,
    /**
     * The name of the button, submitted as a pair with the button’s value as part of the form data.
     */
    name: PropTypes.string,
    /**
     * Defines the value associated with the button’s name when it’s submitted with the form data.
     * This value is passed to the server in params when the form is submitted.
     */
    value: PropTypes.string,
    /**
     * The default behavior of the button. Possible values are:
     * * submit: The button submits the form data to the server. This is the default if the attribute is not specified for buttons associated with a <form>, or if the attribute is an empty or invalid value.
     * * button: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.
     */
    type: PropTypes.oneOf(['', 'button', 'submit']),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};

Button.defaultProps = {
    type: 'button',
    text: 'Button',
};

export default Button;
