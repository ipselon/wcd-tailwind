import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Main = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="main" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Main.propTypes = SectionTypes;

Main.defaultProps = {
    children: [
        <span />
    ],
};

export default Main;
