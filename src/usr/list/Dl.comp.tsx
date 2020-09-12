import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dl = ({id, tailwindUtilities, children, globalAttrs}: SectionProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="dl" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Dl.propTypes = SectionTypes;

Dl.defaultProps = {
    children: [
        <span />
    ],
};

export default Dl;
