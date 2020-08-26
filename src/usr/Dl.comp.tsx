import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Dl = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="dl" tailwindUtilities={tailwindUtilities}>
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
