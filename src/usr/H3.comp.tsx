import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H3 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h3" tailwindUtilities={tailwindUtilities}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

H3.propTypes = SectionOrTextTypes;

H3.defaultProps = {
    text: 'Text here',

};

export default H3;
