import React from 'react';
import PropTypes from 'prop-types';

export interface AsideProps {
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const AsideTypes: PropTypes.InferProps<AsideProps> = {
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tailwind utilities
     */
    tailwindUtilities: PropTypes.object,

};
