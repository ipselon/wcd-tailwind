import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from './Global.props';

export interface SectionProps {
    id?: string;
    globalAttrs?: GlobalProps;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const SectionTypes: PropTypes.InferProps<SectionProps> = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
