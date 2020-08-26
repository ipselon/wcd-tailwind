import React from 'react';
import PropTypes from 'prop-types';

export interface TextProps {
    text?: string;
    tailwindUtilities?: any;
}

export const TextTypes: PropTypes.InferProps<TextProps> = {
    /**
     * Text content value
     */
    text: PropTypes.string,
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
