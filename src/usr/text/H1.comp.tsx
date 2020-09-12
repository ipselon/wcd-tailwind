import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from '../commons/SectionOrText.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H1 = ({ id, tailwindUtilities, children, text, globalAttrs}: SectionOrTextProps) => (
    <HtmlElement id={id} tag="h1" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

H1.propTypes = SectionOrTextTypes;

H1.defaultProps = {
    text: 'Text here',
};

export default H1;
