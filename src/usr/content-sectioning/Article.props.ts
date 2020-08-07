import React from 'react';
import PropTypes from 'prop-types';

export interface ArticleProps {
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const ArticleTypes: PropTypes.InferProps<ArticleProps> = {
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tailwind utilities
     */
    tailwindUtilities: PropTypes.object,

};
