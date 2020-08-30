import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Li = ({tailwindUtilities, children, globalAttrs}: SectionProps) => {
    return (
        <HtmlElement tag="li" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
            {children}
        </HtmlElement>
    );
};

Li.propTypes = SectionTypes;

Li.defaultProps = {
    children: [
        <span />
    ],
};

export default Li;
