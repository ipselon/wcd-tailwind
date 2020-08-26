import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Address = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="address" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Address.propTypes = SectionTypes;

Address.defaultProps = {
    children: [
        <span />
    ],
};

export default Address;
