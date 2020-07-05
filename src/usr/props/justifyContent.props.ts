import PropTypes from "prop-types";

export interface JustifyContentProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const JustifyContentTypes = {
    /**
     * #### all media
     * * Use `justify-start` to justify items against the start of the flex container's main axis.
     * * Use `justify-center` to justify items along the center of the flex container's main axis.
     * * Use `justify-end` to justify items against the end of the flex container's main axis.
     * * Use `justify-between` to justify items along the flex container's main axis such that there is an equal amount of space between each item.
     * * Use `justify-around` to justify items along the flex container's main axis such that there is an equal amount of space around each item.
     */
    default: PropTypes.oneOf([
        '',
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-between',
        'justify-around',
    ]),
    /**
     * #### @media (min-width: 640px)
     * * Use `justify-start` to justify items against the start of the flex container's main axis.
     * * Use `justify-center` to justify items along the center of the flex container's main axis.
     * * Use `justify-end` to justify items against the end of the flex container's main axis.
     * * Use `justify-between` to justify items along the flex container's main axis such that there is an equal amount of space between each item.
     * * Use `justify-around` to justify items along the flex container's main axis such that there is an equal amount of space around each item.
     */
    sm: PropTypes.oneOf([
        '',
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-between',
        'justify-around',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `justify-start` to justify items against the start of the flex container's main axis.
     * * Use `justify-center` to justify items along the center of the flex container's main axis.
     * * Use `justify-end` to justify items against the end of the flex container's main axis.
     * * Use `justify-between` to justify items along the flex container's main axis such that there is an equal amount of space between each item.
     * * Use `justify-around` to justify items along the flex container's main axis such that there is an equal amount of space around each item.
     */
    md: PropTypes.oneOf([
        '',
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-between',
        'justify-around',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `justify-start` to justify items against the start of the flex container's main axis.
     * * Use `justify-center` to justify items along the center of the flex container's main axis.
     * * Use `justify-end` to justify items against the end of the flex container's main axis.
     * * Use `justify-between` to justify items along the flex container's main axis such that there is an equal amount of space between each item.
     * * Use `justify-around` to justify items along the flex container's main axis such that there is an equal amount of space around each item.
     */
    lg: PropTypes.oneOf([
        '',
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-between',
        'justify-around',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `justify-start` to justify items against the start of the flex container's main axis.
     * * Use `justify-center` to justify items along the center of the flex container's main axis.
     * * Use `justify-end` to justify items against the end of the flex container's main axis.
     * * Use `justify-between` to justify items along the flex container's main axis such that there is an equal amount of space between each item.
     * * Use `justify-around` to justify items along the flex container's main axis such that there is an equal amount of space around each item.
     */
    xl: PropTypes.oneOf([
        '',
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-between',
        'justify-around',
    ]),
};
