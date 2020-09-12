import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Div = ({id, tailwindUtilities, children, globalAttrs}: SectionProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="div" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Div.propTypes = SectionTypes;

Div.defaultProps = {
    children: [
        <span />
    ],
};

export default Div;
