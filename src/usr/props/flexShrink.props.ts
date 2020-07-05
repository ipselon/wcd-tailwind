import PropTypes from "prop-types";

export interface FlexShrinkProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const FlexShrinkTypes = {
    /**
     * #### all media
     * * Use `flex-shrink` to allow a flex item to shrink if needed.
     * * Use `flex-shrink-0` to prevent a flex item from shrinking.
     */
    default: PropTypes.oneOf([
        '',
        'flex-shrink',
        'flex-shrink-0',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `flex-shrink` to allow a flex item to shrink if needed.
     * * Use `flex-shrink-0` to prevent a flex item from shrinking.
     */
    sm: PropTypes.oneOf([
        '',
        'flex-shrink',
        'flex-shrink-0',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `flex-shrink` to allow a flex item to shrink if needed.
     * * Use `flex-shrink-0` to prevent a flex item from shrinking.
     */
    md: PropTypes.oneOf([
        '',
        'flex-shrink',
        'flex-shrink-0',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `flex-shrink` to allow a flex item to shrink if needed.
     * * Use `flex-shrink-0` to prevent a flex item from shrinking.
     */
    lg: PropTypes.oneOf([
        '',
        'flex-shrink',
        'flex-shrink-0',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `flex-shrink` to allow a flex item to shrink if needed.
     * * Use `flex-shrink-0` to prevent a flex item from shrinking.
     */
    xl: PropTypes.oneOf([
        '',
        'flex-shrink',
        'flex-shrink-0',
    ]),
};
