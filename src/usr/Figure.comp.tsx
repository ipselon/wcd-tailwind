import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Figure = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="figure" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Figure.propTypes = SectionTypes;

Figure.defaultProps = {
    children: [
        <span />
    ],
};

export default Figure;
