import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Ul = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="ul" tailwindUtilities={tailwindUtilities}>
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
