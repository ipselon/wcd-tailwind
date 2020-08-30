import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from './Global.props';

export interface ListItemProps {
    globalAttrs: GlobalProps;
    value?: number;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

export const ListItemTypes: PropTypes.InferProps<ListItemProps> = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
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
