import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { TextProps, TextTypes } from './commons/Text.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Figcaption = ({tailwindUtilities, text}: TextProps) => {
    return (
        <HtmlElement tag="figcaption" tailwindUtilities={tailwindUtilities}>
            {text}
        </HtmlElement>
    );
};

Figcaption.propTypes = TextTypes;

Figcaption.defaultProps = {
    text: 'New Text',
};

export default Figcaption;
