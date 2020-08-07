import React from 'react';
import PropTypes from 'prop-types';

export interface FooterProps {
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const FooterTypes: PropTypes.InferProps<FooterProps> = {
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tailwind utilities
     */
    tailwindUtilities: PropTypes.object,

};
