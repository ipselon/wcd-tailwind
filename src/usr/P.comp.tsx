import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const P = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="p" tailwindUtilities={tailwindUtilities}>
        {text && text.length > 0 ? text : children}
    </HtmlElement>
);

P.propTypes = SectionOrTextTypes;

P.defaultProps = {
    children: [
        <span />
    ],
};

export default P;
