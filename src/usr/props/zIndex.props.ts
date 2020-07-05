import PropTypes from "prop-types";

export interface ZIndexProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const ZIndexTypes = {
    /**
     * #### all media
     * Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the `z-{index}` utilities.
     */
    default: PropTypes.oneOf([
        '',
        'z-0',
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-auto',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the `z-{index}` utilities.
     */
    sm: PropTypes.oneOf([
        '',
        'z-0',
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-auto',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the `z-{index}` utilities.
     */
    md: PropTypes.oneOf([
        '',
        'z-0',
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-auto',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the `z-{index}` utilities.
     */
    lg: PropTypes.oneOf([
        '',
        'z-0',
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-auto',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the `z-{index}` utilities.
     */
    xl: PropTypes.oneOf([
        '',
        'z-0',
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-auto',
    ]),
};
