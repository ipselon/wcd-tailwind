import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const HGroup = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="hgroup" tailwindUtilities={tailwindUtilities}>
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
