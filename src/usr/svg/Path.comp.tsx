import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import pickWithValues from '../utils/pickWithValues';

export interface PathProps {
    id?: string;
    globalAttrs?: GlobalProps;
    d?: string;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Path = ({
                id,
                tailwindUtilities,
                children,
                d,
                globalAttrs
            }: PathProps) => {
    return (
        <HtmlElement
            id={id}
            tag="path"
            tailwindUtilities={tailwindUtilities}
            d={d}
            {...pickWithValues(globalAttrs)}
        >
            {children}
        </HtmlElement>
    );
};

Path.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * This attribute defines the shape of the path.
     */
    d: PropTypes.string,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};

Path.defaultProps = {
    children: [
        <span/>
    ],
};

export default Path;
