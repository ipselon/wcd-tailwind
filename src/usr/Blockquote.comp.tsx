import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Blockquote = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="blockquote" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Blockquote.propTypes = SectionTypes;

Blockquote.defaultProps = {
    children: [
        <span />
    ],
};

export default Blockquote;
