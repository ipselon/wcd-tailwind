import React from 'react';
import PropTypes from 'prop-types';

export interface SectionProps {
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const SectionTypes: PropTypes.InferProps<SectionProps> = {
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
