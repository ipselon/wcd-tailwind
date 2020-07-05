import PropTypes from "prop-types";

export interface GridColumnSpanProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridColumnSpanTypes = {
    /**
     * #### all media
     * Use the `col-span-{n}` utilities to make an element span n columns.
     */
    default: PropTypes.oneOf([
        '',
        'col-auto',
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use the `col-span-{n}` utilities to make an element span n columns.
     */
    sm: PropTypes.oneOf([
        '',
        'col-auto',
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `col-span-{n}` utilities to make an element span n columns.
     */
    md: PropTypes.oneOf([
        '',
        'col-auto',
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `col-span-{n}` utilities to make an element span n columns.
     */
    lg: PropTypes.oneOf([
        '',
        'col-auto',
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `col-span-{n}` utilities to make an element span n columns.
     */
    xl: PropTypes.oneOf([
        '',
        'col-auto',
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',
    ]),
};
