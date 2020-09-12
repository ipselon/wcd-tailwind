import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Main = ({id, tailwindUtilities, children, globalAttrs}: SectionProps) => {
    return (
        <HtmlElement id={id} tag="main" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
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
