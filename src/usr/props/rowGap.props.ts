import PropTypes from "prop-types";

export interface RowGapProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const RowGapTypes = {
    /**
     * #### all media
     * Use `row-gap-{size}` to change the gutter size between rows in grid layouts.
     */
    default: PropTypes.oneOf([
        '',
        'row-gap-0',
        'row-gap-1',
        'row-gap-2',
        'row-gap-3',
        'row-gap-4',
        'row-gap-5',
        'row-gap-6',
        'row-gap-8',
        'row-gap-10',
        'row-gap-12',
        'row-gap-16',
        'row-gap-20',
        'row-gap-24',
        'row-gap-32',
        'row-gap-40',
        'row-gap-48',
        'row-gap-56',
        'row-gap-64',
        'row-gap-px',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use `row-gap-{size}` to change the gutter size between rows in grid layouts.
     */
    sm: PropTypes.oneOf([
        '',
        'row-gap-0',
        'row-gap-1',
        'row-gap-2',
        'row-gap-3',
        'row-gap-4',
        'row-gap-5',
        'row-gap-6',
        'row-gap-8',
        'row-gap-10',
        'row-gap-12',
        'row-gap-16',
        'row-gap-20',
        'row-gap-24',
        'row-gap-32',
        'row-gap-40',
        'row-gap-48',
        'row-gap-56',
        'row-gap-64',
        'row-gap-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use `row-gap-{size}` to change the gutter size between rows in grid layouts.
     */
    md: PropTypes.oneOf([
        '',
        'row-gap-0',
        'row-gap-1',
        'row-gap-2',
        'row-gap-3',
        'row-gap-4',
        'row-gap-5',
        'row-gap-6',
        'row-gap-8',
        'row-gap-10',
        'row-gap-12',
        'row-gap-16',
        'row-gap-20',
        'row-gap-24',
        'row-gap-32',
        'row-gap-40',
        'row-gap-48',
        'row-gap-56',
        'row-gap-64',
        'row-gap-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use `row-gap-{size}` to change the gutter size between rows in grid layouts.
     */
    lg: PropTypes.oneOf([
        '',
        'row-gap-0',
        'row-gap-1',
        'row-gap-2',
        'row-gap-3',
        'row-gap-4',
        'row-gap-5',
        'row-gap-6',
        'row-gap-8',
        'row-gap-10',
        'row-gap-12',
        'row-gap-16',
        'row-gap-20',
        'row-gap-24',
        'row-gap-32',
        'row-gap-40',
        'row-gap-48',
        'row-gap-56',
        'row-gap-64',
        'row-gap-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use `row-gap-{size}` to change the gutter size between rows in grid layouts.
     */
    xl: PropTypes.oneOf([
        '',
        'row-gap-0',
        'row-gap-1',
        'row-gap-2',
        'row-gap-3',
        'row-gap-4',
        'row-gap-5',
        'row-gap-6',
        'row-gap-8',
        'row-gap-10',
        'row-gap-12',
        'row-gap-16',
        'row-gap-20',
        'row-gap-24',
        'row-gap-32',
        'row-gap-40',
        'row-gap-48',
        'row-gap-56',
        'row-gap-64',
        'row-gap-px',
    ]),
};
