import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from './Global.props';

export interface SectionOrTextProps {
    id?: string;
    globalAttrs?: GlobalProps;
    children?: React.ReactNode;
    text?: string;
    tailwindUtilities?: any;
}

export const SectionOrTextTypes: PropTypes.InferProps<SectionOrTextProps> = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * An array of the nested HTML elements.
     * > If there is an element in the children property the text is not rendered.
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Text content value.
     * > If there is an element in the children property the text is not rendered.
     */
    text: PropTypes.string,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
};
