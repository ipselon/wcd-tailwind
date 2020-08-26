import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H5 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h5" tailwindUtilities={tailwindUtilities}>
        {text && text.length > 0 ? text : children}
    </HtmlElement>
);

H5.propTypes = SectionOrTextTypes;

H5.defaultProps = {
    children: [
        <span />
    ],
};

export default H5;
