import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import pickWithValues from '../utils/pickWithValues';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import PropTypes from 'prop-types';


export interface DivProps {
    id?: string;
    globalAttrs?: GlobalProps;
    backgroundImageUrl?: string;
    tailwindUtilities?: any;
    children?: React.ReactNode;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Div = ({id, tailwindUtilities, backgroundImageUrl, children, globalAttrs}: DivProps) => {
    const globalAttrsProps: any = pickWithValues(globalAttrs);
    if (backgroundImageUrl && backgroundImageUrl.length > 0) {
        globalAttrsProps.style = globalAttrsProps.style || {};
        globalAttrsProps.style.backgroundImage = `url(${backgroundImageUrl})`;
    }
    return (
        <HtmlElement id={id} tag="div" tailwindUtilities={tailwindUtilities} {...globalAttrsProps}>
            {children}
        </HtmlElement>
    );
};

Div.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * URL for the background image
     */
    backgroundImageUrl: PropTypes.string,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
};

Div.defaultProps = {
    children: [
        <span />
    ],
};

export default Div;
