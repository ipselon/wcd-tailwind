import PropTypes from "prop-types";

export interface AlignItemsProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const AlignItemsTypes = {
    /**
     * #### all media
     * * Use `items-stretch` to stretch items to fill the flex container's cross axis.
     * * Use `items-start` to align items to the start of the flex container's cross axis.
     * * Use `items-center` to align items along the center of the flex container's cross axis.
     * * Use `items-end` to align items to the end of the flex container's cross axis.
     * * Use `items-baseline` to align items along the flex container's cross axis such that all of their baselines align.
     */
    default: PropTypes.oneOf([
        '',
        'items-stretch',
        'items-start',
        'items-center',
        'items-end',
        'items-baseline',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `items-stretch` to stretch items to fill the flex container's cross axis.
     * * Use `items-start` to align items to the start of the flex container's cross axis.
     * * Use `items-center` to align items along the center of the flex container's cross axis.
     * * Use `items-end` to align items to the end of the flex container's cross axis.
     * * Use `items-baseline` to align items along the flex container's cross axis such that all of their baselines align.
     */
    sm: PropTypes.oneOf([
        '',
        'items-stretch',
        'items-start',
        'items-center',
        'items-end',
        'items-baseline',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `items-stretch` to stretch items to fill the flex container's cross axis.
     * * Use `items-start` to align items to the start of the flex container's cross axis.
     * * Use `items-center` to align items along the center of the flex container's cross axis.
     * * Use `items-end` to align items to the end of the flex container's cross axis.
     * * Use `items-baseline` to align items along the flex container's cross axis such that all of their baselines align.
     */
    md: PropTypes.oneOf([
        '',
        'items-stretch',
        'items-start',
        'items-center',
        'items-end',
        'items-baseline',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `items-stretch` to stretch items to fill the flex container's cross axis.
     * * Use `items-start` to align items to the start of the flex container's cross axis.
     * * Use `items-center` to align items along the center of the flex container's cross axis.
     * * Use `items-end` to align items to the end of the flex container's cross axis.
     * * Use `items-baseline` to align items along the flex container's cross axis such that all of their baselines align.
     */
    lg: PropTypes.oneOf([
        '',
        'items-stretch',
        'items-start',
        'items-center',
        'items-end',
        'items-baseline',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `items-stretch` to stretch items to fill the flex container's cross axis.
     * * Use `items-start` to align items to the start of the flex container's cross axis.
     * * Use `items-center` to align items along the center of the flex container's cross axis.
     * * Use `items-end` to align items to the end of the flex container's cross axis.
     * * Use `items-baseline` to align items along the flex container's cross axis such that all of their baselines align.
     */
    xl: PropTypes.oneOf([
        '',
        'items-stretch',
        'items-start',
        'items-center',
        'items-end',
        'items-baseline',
    ]),
};
