import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionProps, SectionTypes } from '../commons/Section.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Address = ({id, tailwindUtilities, children, globalAttrs }: SectionProps) => {
    const globalAttrsProps = pickWithValues(globalAttrs);
    return (
        <HtmlElement id={id} tag="address" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Address.propTypes = SectionTypes;

Address.defaultProps = {
    children: [
        <span/>
    ],
};

export default Address;
