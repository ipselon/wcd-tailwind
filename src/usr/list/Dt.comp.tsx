import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { TextProps, TextTypes } from '../commons/Text.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dt = ({id, tailwindUtilities, text, globalAttrs}: TextProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="dt" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {text}
        </HtmlElement>
    );
};

Dt.propTypes = TextTypes;

Dt.defaultProps = {
    text: 'Description Term',
};

export default Dt;
