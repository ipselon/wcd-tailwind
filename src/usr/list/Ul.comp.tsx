import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Ul = ({id, tailwindUtilities, children, globalAttrs}: SectionProps) => {
    return (
        <HtmlElement id={id} tag="ul" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
            {children}
        </HtmlElement>
    );
};

Ul.propTypes = SectionTypes;

Ul.defaultProps = {
    children: [
        <span />
    ],
};

export default Ul;
