import React from 'react';
import PropTypes from 'prop-types';

export interface ListItemProps {
    value?: number;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const ListItemTypes: PropTypes.InferProps<ListItemProps> = {
    /**
     * An integer attribute indicates the current ordinal value of the list item.
     * The value attribute has no meaning for unordered lists.
     */
    value: PropTypes.number,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
