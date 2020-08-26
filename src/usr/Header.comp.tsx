import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Footer = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="header" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Footer.propTypes = SectionTypes;

Footer.defaultProps = {
    children: [
        <span />
    ],
};

export default Footer;
