import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import { EmptyProps, EmptyTypes } from '../commons/Empty.props';
import pickWithValues from '../utils/pickWithValues';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Hr = ({tailwindUtilities, globalAttrs}: EmptyProps) => {
    return (
        <HtmlElement tag="hr" tailwindUtilities={tailwindUtilities} {...pickWithValues(globalAttrs)} />
    );
};

Hr.propTypes = EmptyTypes;

Hr.defaultProps = {
};

export default Hr;
