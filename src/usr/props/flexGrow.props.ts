import PropTypes from "prop-types";

export interface FlexGrowProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const FlexGrowTypes = {
    /**
     * #### all media
     * * Use `flex-grow` to allow a flex item to grow to fill any available space.
     * * Use `flex-grow-0` to prevent a flex item from growing.
     */
    default: PropTypes.oneOf([
        '',
        'flex-grow',
        'flex-grow-0',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `flex-grow` to allow a flex item to grow to fill any available space.
     * * Use `flex-grow-0` to prevent a flex item from growing.
     */
    sm: PropTypes.oneOf([
        '',
        'flex-grow',
        'flex-grow-0',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `flex-grow` to allow a flex item to grow to fill any available space.
     * * Use `flex-grow-0` to prevent a flex item from growing.
     */
    md: PropTypes.oneOf([
        '',
        'flex-grow',
        'flex-grow-0',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `flex-grow` to allow a flex item to grow to fill any available space.
     * * Use `flex-grow-0` to prevent a flex item from growing.
     */
    lg: PropTypes.oneOf([
        '',
        'flex-grow',
        'flex-grow-0',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `flex-grow` to allow a flex item to grow to fill any available space.
     * * Use `flex-grow-0` to prevent a flex item from growing.
     */
    xl: PropTypes.oneOf([
        '',
        'flex-grow',
        'flex-grow-0',
    ]),
};
