import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { TextProps, TextTypes } from '../commons/Text.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dd = ({id, tailwindUtilities, text, globalAttrs}: TextProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="dd" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {text}
        </HtmlElement>
    );
};

Dd.propTypes = TextTypes;

Dd.defaultProps = {
    text: 'Description Text',
};

export default Dd;
