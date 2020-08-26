import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { TextProps, TextTypes } from './commons/Text.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dt = ({tailwindUtilities, text}: TextProps) => {
    return (
        <HtmlElement tag="dt" tailwindUtilities={tailwindUtilities}>
            {text}
        </HtmlElement>
    );
};

Dt.propTypes = TextTypes;

Dt.defaultProps = {
    text: 'Description Term',
};

export default Dt;
