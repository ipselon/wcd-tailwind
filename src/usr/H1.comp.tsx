import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H1 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h1" tailwindUtilities={tailwindUtilities}>
        {text && text.length > 0 ? text : children}
    </HtmlElement>
);

H1.propTypes = SectionOrTextTypes;

H1.defaultProps = {
    children: [
        <span/>
    ],
};

export default H1;
