import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { TextProps, TextTypes } from './commons/Text.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dd = ({tailwindUtilities, text}: TextProps) => {
    return (
        <HtmlElement tag="dd" tailwindUtilities={tailwindUtilities}>
            {text}
        </HtmlElement>
    );
};

Dd.propTypes = TextTypes;

Dd.defaultProps = {
    text: 'Description Text',
};

export default Dd;
