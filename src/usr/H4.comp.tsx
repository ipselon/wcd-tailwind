import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H4 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h4" tailwindUtilities={tailwindUtilities}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

H4.propTypes = SectionOrTextTypes;

H4.defaultProps = {
    text: 'Text here',

};

export default H4;
