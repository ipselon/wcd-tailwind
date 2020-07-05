import PropTypes from "prop-types";

export interface GridTemplateColumnsProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridTemplateColumnsTypes = {
    /**
     * #### all media
     * Use the `grid-cols-{n}` utilities to create grids with n equally sized columns.
     */
    default: PropTypes.oneOf([
        '',
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-cols-7',
        'grid-cols-8',
        'grid-cols-9',
        'grid-cols-10',
        'grid-cols-11',
        'grid-cols-12',
        'grid-cols-none',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use the `grid-cols-{n}` utilities to create grids with n equally sized columns.
     */
    sm: PropTypes.oneOf([
        '',
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-cols-7',
        'grid-cols-8',
        'grid-cols-9',
        'grid-cols-10',
        'grid-cols-11',
        'grid-cols-12',
        'grid-cols-none',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `grid-cols-{n}` utilities to create grids with n equally sized columns.
     */
    md: PropTypes.oneOf([
        '',
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-cols-7',
        'grid-cols-8',
        'grid-cols-9',
        'grid-cols-10',
        'grid-cols-11',
        'grid-cols-12',
        'grid-cols-none',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `grid-cols-{n}` utilities to create grids with n equally sized columns.
     */
    lg: PropTypes.oneOf([
        '',
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-cols-7',
        'grid-cols-8',
        'grid-cols-9',
        'grid-cols-10',
        'grid-cols-11',
        'grid-cols-12',
        'grid-cols-none',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `grid-cols-{n}` utilities to create grids with n equally sized columns.
     */
    xl: PropTypes.oneOf([
        '',
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-cols-7',
        'grid-cols-8',
        'grid-cols-9',
        'grid-cols-10',
        'grid-cols-11',
        'grid-cols-12',
        'grid-cols-none',
    ]),
};
