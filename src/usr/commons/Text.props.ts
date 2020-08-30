import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from './Global.props';

export interface TextProps {
    globalAttrs: GlobalProps;
    text?: string;
    tailwindUtilities?: any;
}

export const TextTypes: PropTypes.InferProps<TextProps> = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Text content value
     */
    text: PropTypes.string,
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
