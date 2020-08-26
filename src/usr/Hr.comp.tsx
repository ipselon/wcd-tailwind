import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { EmptyProps, EmptyTypes } from './commons/Empty.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Hr = ({tailwindUtilities}: EmptyProps) => {
    return (
        <HtmlElement tag="hr" tailwindUtilities={tailwindUtilities}/>
    );
};

Hr.propTypes = EmptyTypes;

Hr.defaultProps = {
};

export default Hr;
