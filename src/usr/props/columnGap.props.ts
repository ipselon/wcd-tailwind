import PropTypes from "prop-types";

export interface ColumnGapProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const ColumnGapTypes = {
    /**
     * #### all media
     * Use `col-gap-{size}` to change the gutter size between columns in grid layouts.
     */
    default: PropTypes.oneOf([
        '',
        'col-gap-0',
        'col-gap-1',
        'col-gap-2',
        'col-gap-3',
        'col-gap-4',
        'col-gap-5',
        'col-gap-6',
        'col-gap-8',
        'col-gap-10',
        'col-gap-12',
        'col-gap-16',
        'col-gap-20',
        'col-gap-24',
        'col-gap-32',
        'col-gap-40',
        'col-gap-48',
        'col-gap-56',
        'col-gap-64',
        'col-gap-px',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use `col-gap-{size}` to change the gutter size between columns in grid layouts.
     */
    sm: PropTypes.oneOf([
        '',
        'col-gap-0',
        'col-gap-1',
        'col-gap-2',
        'col-gap-3',
        'col-gap-4',
        'col-gap-5',
        'col-gap-6',
        'col-gap-8',
        'col-gap-10',
        'col-gap-12',
        'col-gap-16',
        'col-gap-20',
        'col-gap-24',
        'col-gap-32',
        'col-gap-40',
        'col-gap-48',
        'col-gap-56',
        'col-gap-64',
        'col-gap-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use `col-gap-{size}` to change the gutter size between columns in grid layouts.
     */
    md: PropTypes.oneOf([
        '',
        'col-gap-0',
        'col-gap-1',
        'col-gap-2',
        'col-gap-3',
        'col-gap-4',
        'col-gap-5',
        'col-gap-6',
        'col-gap-8',
        'col-gap-10',
        'col-gap-12',
        'col-gap-16',
        'col-gap-20',
        'col-gap-24',
        'col-gap-32',
        'col-gap-40',
        'col-gap-48',
        'col-gap-56',
        'col-gap-64',
        'col-gap-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use `col-gap-{size}` to change the gutter size between columns in grid layouts.
     */
    lg: PropTypes.oneOf([
        '',
        'col-gap-0',
        'col-gap-1',
        'col-gap-2',
        'col-gap-3',
        'col-gap-4',
        'col-gap-5',
        'col-gap-6',
        'col-gap-8',
        'col-gap-10',
        'col-gap-12',
        'col-gap-16',
        'col-gap-20',
        'col-gap-24',
        'col-gap-32',
        'col-gap-40',
        'col-gap-48',
        'col-gap-56',
        'col-gap-64',
        'col-gap-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use `col-gap-{size}` to change the gutter size between columns in grid layouts.
     */
    xl: PropTypes.oneOf([
        '',
        'col-gap-0',
        'col-gap-1',
        'col-gap-2',
        'col-gap-3',
        'col-gap-4',
        'col-gap-5',
        'col-gap-6',
        'col-gap-8',
        'col-gap-10',
        'col-gap-12',
        'col-gap-16',
        'col-gap-20',
        'col-gap-24',
        'col-gap-32',
        'col-gap-40',
        'col-gap-48',
        'col-gap-56',
        'col-gap-64',
        'col-gap-px',
    ]),
};
