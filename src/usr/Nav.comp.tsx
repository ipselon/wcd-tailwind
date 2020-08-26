import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Nav = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="nav" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Nav.propTypes = SectionTypes;

Nav.defaultProps = {
    children: [
        <span />
    ],
};

export default Nav;
