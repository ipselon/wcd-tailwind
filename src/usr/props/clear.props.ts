import PropTypes from "prop-types";

export interface ClearProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const ClearTypes = {
    /**
     * #### all media
     * Add description here
     */
    default: PropTypes.oneOf([
        '',
        'clear-left',
        'clear-right',
        'clear-both',
        'clear-none',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 640px)
     */
    sm: PropTypes.oneOf([
        '',
        'clear-left',
        'clear-right',
        'clear-both',
        'clear-none',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 768px)
     */
    md: PropTypes.oneOf([
        '',
        'clear-left',
        'clear-right',
        'clear-both',
        'clear-none',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1024px)
     */
    lg: PropTypes.oneOf([
        '',
        'clear-left',
        'clear-right',
        'clear-both',
        'clear-none',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1280px)
     */
    xl: PropTypes.oneOf([
        '',
        'clear-left',
        'clear-right',
        'clear-both',
        'clear-none',
    ]),
};
