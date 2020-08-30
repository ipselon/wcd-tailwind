import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const HGroup = ({tailwindUtilities, children, globalAttrs}: SectionProps) => {
    return (
        <HtmlElement tag="hgroup" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
            {children}
        </HtmlElement>
    );
};

HGroup.propTypes = SectionTypes;

HGroup.defaultProps = {
    children: [
        <span />
    ],
};

export default HGroup;
