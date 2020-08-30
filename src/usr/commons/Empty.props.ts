import PropTypes from 'prop-types';

export interface EmptyProps {
    tailwindUtilities?: any;
}

export const EmptyTypes: PropTypes.InferProps<EmptyProps> = {
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};
