import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H6 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h6" tailwindUtilities={tailwindUtilities}>
        {text && text.length > 0 ? text : children}
    </HtmlElement>
);

H6.propTypes = SectionOrTextTypes;

H6.defaultProps = {
    children: [
        <span />
    ],
};

export default H6;
