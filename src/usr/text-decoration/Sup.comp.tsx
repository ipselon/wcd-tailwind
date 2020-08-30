import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from '../commons/SectionOrText.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Sup = ({ tailwindUtilities, children, text, globalAttrs }: SectionOrTextProps) => (
    <HtmlElement tag="sup" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

Sup.propTypes = SectionOrTextTypes;

Sup.defaultProps = {
    text: 'Text here',
};

export default Sup;
