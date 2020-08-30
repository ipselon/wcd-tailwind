import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Nav = ({tailwindUtilities, children, globalAttrs}: SectionProps) => {
    return (
        <HtmlElement tag="nav" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
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
