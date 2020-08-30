import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from '../commons/SectionOrText.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Span = ({ tailwindUtilities, children, text, globalAttrs }: SectionOrTextProps) => (
    <HtmlElement tag="span" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

Span.propTypes = SectionOrTextTypes;

Span.defaultProps = {
    text: 'Text here',
};

export default Span;
