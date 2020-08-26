import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { TextProps, TextTypes } from './commons/Text.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Pre = ({tailwindUtilities, text}: TextProps) => {
    return (
        <HtmlElement tag="pre" tailwindUtilities={tailwindUtilities}>
            {text}
        </HtmlElement>
    );
};

Pre.propTypes = TextTypes;

Pre.defaultProps = {
    text: 'New Text',
};

export default Pre;
