import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Fieldset = ({id, tailwindUtilities, children, globalAttrs}: SectionProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="fieldset" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Fieldset.propTypes = SectionTypes;

Fieldset.defaultProps = {
    children: [
        <span />
    ],
};

export default Fieldset;
