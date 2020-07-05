import PropTypes from "prop-types";

export interface AlignSelfProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const AlignSelfTypes = {
    /**
     * #### all media
     * * Use `self-auto` to align an item based on the value of the flex container's align-items property.
     * * Use `self-start` to align an item to the start of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-center` to align an item along the center of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-end` to align an item to the end of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-stretch` to stretch an item to fill the flex container's cross axis, despite the container's `align-items` value.
     */
    default: PropTypes.oneOf([
        '',
        'self-auto',
        'self-start',
        'self-center',
        'self-end',
        'self-stretch',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `self-auto` to align an item based on the value of the flex container's align-items property.
     * * Use `self-start` to align an item to the start of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-center` to align an item along the center of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-end` to align an item to the end of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-stretch` to stretch an item to fill the flex container's cross axis, despite the container's `align-items` value.
     */
    sm: PropTypes.oneOf([
        '',
        'self-auto',
        'self-start',
        'self-center',
        'self-end',
        'self-stretch',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `self-auto` to align an item based on the value of the flex container's align-items property.
     * * Use `self-start` to align an item to the start of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-center` to align an item along the center of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-end` to align an item to the end of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-stretch` to stretch an item to fill the flex container's cross axis, despite the container's `align-items` value.
     */
    md: PropTypes.oneOf([
        '',
        'self-auto',
        'self-start',
        'self-center',
        'self-end',
        'self-stretch',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `self-auto` to align an item based on the value of the flex container's align-items property.
     * * Use `self-start` to align an item to the start of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-center` to align an item along the center of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-end` to align an item to the end of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-stretch` to stretch an item to fill the flex container's cross axis, despite the container's `align-items` value.
     */
    lg: PropTypes.oneOf([
        '',
        'self-auto',
        'self-start',
        'self-center',
        'self-end',
        'self-stretch',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `self-auto` to align an item based on the value of the flex container's align-items property.
     * * Use `self-start` to align an item to the start of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-center` to align an item along the center of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-end` to align an item to the end of the flex container's cross axis, despite the container's `align-items` value.
     * * Use `self-stretch` to stretch an item to fill the flex container's cross axis, despite the container's `align-items` value.
     */
    xl: PropTypes.oneOf([
        '',
        'self-auto',
        'self-start',
        'self-center',
        'self-end',
        'self-stretch',
    ]),
};
