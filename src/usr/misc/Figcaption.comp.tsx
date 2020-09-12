import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { TextProps, TextTypes } from '../commons/Text.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Figcaption = ({id, tailwindUtilities, text, globalAttrs}: TextProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="figcaption" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {text}
        </HtmlElement>
    );
};

Figcaption.propTypes = TextTypes;

Figcaption.defaultProps = {
    text: 'New Text',
};

export default Figcaption;