import PropTypes from 'prop-types';

export interface GlobalProps {
    tabindex?: number;
    title?: string;
}

export const GlobalTypes: PropTypes.InferProps<GlobalProps> = {
    /**
     * An integer attribute indicating if the element can take input focus (is focusable),
     * if it should participate to sequential keyboard navigation, and if so, at what position.
     */
    tabindex: PropTypes.number,
    /**
     * Contains a text representing advisory information related to the element it belongs to.
     * Such information can typically, but not necessarily, be presented to the user as a tooltip.
     */
    title: PropTypes.string,
};
