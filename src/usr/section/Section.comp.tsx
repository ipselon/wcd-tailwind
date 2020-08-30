import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Section = ({tailwindUtilities, children, globalAttrs}: SectionProps) => {
    return (
        <HtmlElement tag="section" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
            {children}
        </HtmlElement>
    );
};

Section.propTypes = SectionTypes;

Section.defaultProps = {
    children: [
        <span />
    ],
};

export default Section;
