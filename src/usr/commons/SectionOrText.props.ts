import React from 'react';
import PropTypes from 'prop-types';

export interface SectionOrTextProps {
    children?: React.ReactNode;
    text?: string;
    tailwindUtilities?: any;
}

export const SectionOrTextTypes: PropTypes.InferProps<SectionOrTextProps> = {
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
