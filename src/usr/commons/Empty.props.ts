import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from './Global.props';

export interface EmptyProps {
    globalAttrs: GlobalProps;
    tailwindUtilities?: any;
}

export const EmptyTypes: PropTypes.InferProps<EmptyProps> = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
