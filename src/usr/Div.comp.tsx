import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Div = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="div" tailwindUtilities={tailwindUtilities}>
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
