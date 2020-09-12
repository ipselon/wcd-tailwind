import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { SectionOrTextProps, SectionOrTextTypes } from '../commons/SectionOrText.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Bdo = ({ id, tailwindUtilities, children, text, globalAttrs }: SectionOrTextProps) => (
    <HtmlElement id={id} tag="bdo" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)}>
        {React.Children.count(children) > 0 ? children : text}
    </HtmlElement>
);

Bdo.propTypes = SectionOrTextTypes;

Bdo.defaultProps = {
    text: 'Text here',
};

export default Bdo;