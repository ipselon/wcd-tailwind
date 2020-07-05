import PropTypes from "prop-types";

export interface GridTemplateRowsProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridTemplateRowsTypes = {
    /**
     * #### all media
     * Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.
     */
    default: PropTypes.oneOf([
        '',
        'grid-rows-1',
        'grid-rows-2',
        'grid-rows-3',
        'grid-rows-4',
        'grid-rows-5',
        'grid-rows-6',
        'grid-rows-none',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.
     */
    sm: PropTypes.oneOf([
        '',
        'grid-rows-1',
        'grid-rows-2',
        'grid-rows-3',
        'grid-rows-4',
        'grid-rows-5',
        'grid-rows-6',
        'grid-rows-none',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.
     */
    md: PropTypes.oneOf([
        '',
        'grid-rows-1',
        'grid-rows-2',
        'grid-rows-3',
        'grid-rows-4',
        'grid-rows-5',
        'grid-rows-6',
        'grid-rows-none',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.
     */
    lg: PropTypes.oneOf([
        '',
        'grid-rows-1',
        'grid-rows-2',
        'grid-rows-3',
        'grid-rows-4',
        'grid-rows-5',
        'grid-rows-6',
        'grid-rows-none',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.
     */
    xl: PropTypes.oneOf([
        '',
        'grid-rows-1',
        'grid-rows-2',
        'grid-rows-3',
        'grid-rows-4',
        'grid-rows-5',
        'grid-rows-6',
        'grid-rows-none',
    ]),
};
