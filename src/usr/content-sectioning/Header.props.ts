import React from 'react';
import PropTypes from 'prop-types';

export interface HeaderProps {
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const HeaderTypes: PropTypes.InferProps<HeaderProps> = {
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tailwind utilities
     */
    tailwindUtilities: PropTypes.object,

};
