import PropTypes from "prop-types";

export interface GridRowSpanProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridRowSpanTypes = {
    /**
     * #### all media
     * Use the `rows-span-{n}` utilities to make an element span n rows.
     */
    default: PropTypes.oneOf([
        '',
        'row-span-auto',
        'row-span-1',
        'row-span-2',
        'row-span-3',
        'row-span-4',
        'row-span-5',
        'row-span-6',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use the `rows-span-{n}` utilities to make an element span n rows.
     */
    sm: PropTypes.oneOf([
        '',
        'row-span-auto',
        'row-span-1',
        'row-span-2',
        'row-span-3',
        'row-span-4',
        'row-span-5',
        'row-span-6',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `rows-span-{n}` utilities to make an element span n rows.
     */
    md: PropTypes.oneOf([
        '',
        'row-span-auto',
        'row-span-1',
        'row-span-2',
        'row-span-3',
        'row-span-4',
        'row-span-5',
        'row-span-6',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `rows-span-{n}` utilities to make an element span n rows.
     */
    lg: PropTypes.oneOf([
        '',
        'row-span-auto',
        'row-span-1',
        'row-span-2',
        'row-span-3',
        'row-span-4',
        'row-span-5',
        'row-span-6',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `rows-span-{n}` utilities to make an element span n rows.
     */
    xl: PropTypes.oneOf([
        '',
        'row-span-auto',
        'row-span-1',
        'row-span-2',
        'row-span-3',
        'row-span-4',
        'row-span-5',
        'row-span-6',
    ]),
};
