import PropTypes from "prop-types";

export interface FloatProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const FloatTypes = {
    /**
     * #### all media
     * Add description here
     */
    default: PropTypes.oneOf([
        '',
        'float-right',
        'float-left',
        'float-none',
        'clearfix',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 640px)
     */
    sm: PropTypes.oneOf([
        '',
        'float-right',
        'float-left',
        'float-none',
        'clearfix',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 768px)
     */
    md: PropTypes.oneOf([
        '',
        'float-right',
        'float-left',
        'float-none',
        'clearfix',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1024px)
     */
    lg: PropTypes.oneOf([
        '',
        'float-right',
        'float-left',
        'float-none',
        'clearfix',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1280px)
     */
    xl: PropTypes.oneOf([
        '',
        'float-right',
        'float-left',
        'float-none',
        'clearfix',
    ]),
};
