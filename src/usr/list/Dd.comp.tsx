import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { TextProps, TextTypes } from '../commons/Text.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dd = ({tailwindUtilities, text, globalAttrs}: TextProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement tag="dd" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {text}
        </HtmlElement>
    );
};

Dd.propTypes = TextTypes;

Dd.defaultProps = {
    text: 'Description Text',
};

export default Dd;
