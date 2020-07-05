import PropTypes from "prop-types";

export interface GapProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GapTypes = {
    /**
     * #### all media
     * Use `gap-{size}` to change the gutter size in grid layouts.
     */
    default: PropTypes.oneOf([
        '',
        'gap-0',
        'gap-1',
        'gap-2',
        'gap-3',
        'gap-4',
        'gap-5',
        'gap-6',
        'gap-8',
        'gap-10',
        'gap-12',
        'gap-16',
        'gap-20',
        'gap-24',
        'gap-32',
        'gap-40',
        'gap-48',
        'gap-56',
        'gap-64',
        'gap-px',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use `gap-{size}` to change the gutter size in grid layouts.
     */
    sm: PropTypes.oneOf([
        '',
        'gap-0',
        'gap-1',
        'gap-2',
        'gap-3',
        'gap-4',
        'gap-5',
        'gap-6',
        'gap-8',
        'gap-10',
        'gap-12',
        'gap-16',
        'gap-20',
        'gap-24',
        'gap-32',
        'gap-40',
        'gap-48',
        'gap-56',
        'gap-64',
        'gap-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use `gap-{size}` to change the gutter size in grid layouts.
     */
    md: PropTypes.oneOf([
        '',
        'gap-0',
        'gap-1',
        'gap-2',
        'gap-3',
        'gap-4',
        'gap-5',
        'gap-6',
        'gap-8',
        'gap-10',
        'gap-12',
        'gap-16',
        'gap-20',
        'gap-24',
        'gap-32',
        'gap-40',
        'gap-48',
        'gap-56',
        'gap-64',
        'gap-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use `gap-{size}` to change the gutter size in grid layouts.
     */
    lg: PropTypes.oneOf([
        '',
        'gap-0',
        'gap-1',
        'gap-2',
        'gap-3',
        'gap-4',
        'gap-5',
        'gap-6',
        'gap-8',
        'gap-10',
        'gap-12',
        'gap-16',
        'gap-20',
        'gap-24',
        'gap-32',
        'gap-40',
        'gap-48',
        'gap-56',
        'gap-64',
        'gap-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use `gap-{size}` to change the gutter size in grid layouts.
     */
    xl: PropTypes.oneOf([
        '',
        'gap-0',
        'gap-1',
        'gap-2',
        'gap-3',
        'gap-4',
        'gap-5',
        'gap-6',
        'gap-8',
        'gap-10',
        'gap-12',
        'gap-16',
        'gap-20',
        'gap-24',
        'gap-32',
        'gap-40',
        'gap-48',
        'gap-56',
        'gap-64',
        'gap-px',
    ]),
};
