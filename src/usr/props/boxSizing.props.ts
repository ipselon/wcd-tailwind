import PropTypes from "prop-types";

export interface BoxSizingProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const BoxSizingTypes = {
    /**
     * #### all media
     * Use box-border to set an element's box-sizing to border-box, telling the browser to include the element's borders and padding when you give it a height or width.
     *
     * Use box-content to set an element's box-sizing to content-box, telling the browser to add borders and padding on top of the element's specified width or height.
     */
    default: PropTypes.oneOf(['', 'box-border', 'box-content']),
    /**
     * #### @media (min-width: 640px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 640px)
     */
    sm: PropTypes.oneOf(['', 'box-border', 'box-content']),
    /**
     * #### @media (min-width: 768px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 768px)
     */
    md: PropTypes.oneOf(['', 'box-border', 'box-content']),
    /**
     * #### @media (min-width: 1024px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1024px)
     */
    lg: PropTypes.oneOf(['', 'box-border', 'box-content']),
    /**
     * #### @media (min-width: 1280px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1280px)
     */
    xl: PropTypes.oneOf(['', 'box-border', 'box-content']),
};
