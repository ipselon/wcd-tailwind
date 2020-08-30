import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H6 = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="h6" tailwindUtilities={tailwindUtilities}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

H6.propTypes = SectionOrTextTypes;

H6.defaultProps = {
    text: 'Text here',

};

export default H6;
