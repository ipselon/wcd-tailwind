import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from './commons/SectionOrText.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const P = ({ tailwindUtilities, children, text }: SectionOrTextProps) => (
    <HtmlElement tag="p" tailwindUtilities={tailwindUtilities}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

P.propTypes = SectionOrTextTypes;

P.defaultProps = {
    text: 'Text here',
};

export default P;
