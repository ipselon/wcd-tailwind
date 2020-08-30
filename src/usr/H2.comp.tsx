import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H2 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h2" tailwindUtilities={tailwindUtilities}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

H2.propTypes = SectionOrTextTypes;

H2.defaultProps = {
    text: 'Text here',

};

export default H2;
