import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { TextProps, TextTypes } from '../commons/Text.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Legend = ({id, tailwindUtilities, text, globalAttrs}: TextProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="legend" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {text}
        </HtmlElement>
    );
};

Legend.propTypes = TextTypes;

Legend.defaultProps = {
    text: 'Fieldset Legend',
};

export default Legend;
