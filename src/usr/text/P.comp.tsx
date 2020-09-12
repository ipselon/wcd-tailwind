import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from '../commons/SectionOrText.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const P = ({ id, tailwindUtilities, children, text, globalAttrs }: SectionOrTextProps) => (
    <HtmlElement id={id} tag="p" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

P.propTypes = SectionOrTextTypes;

P.defaultProps = {
    text: 'Text here',
};

export default P;
