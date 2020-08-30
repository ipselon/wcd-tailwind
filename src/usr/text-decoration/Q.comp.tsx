import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from '../commons/SectionOrText.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Q = ({ tailwindUtilities, children, text, globalAttrs }: SectionOrTextProps) => (
    <HtmlElement tag="q" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

Q.propTypes = SectionOrTextTypes;

Q.defaultProps = {
    text: 'Text here',
};

export default Q;
