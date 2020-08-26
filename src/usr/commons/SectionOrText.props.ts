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
     * > If there is a value in the text property the children elements are not rendered.
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Text content value.
     * > If there is a value in the text property the children elements are not rendered.
     */
    text: PropTypes.string,
    /**
     * Tail Wind Classes
     */
    tailwindUtilities: PropTypes.object,
};
