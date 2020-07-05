import PropTypes from "prop-types";

export interface PaddingProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingTypes = {
    /**
     * #### all media
     * Control the padding on all sides of an element using the `p-{size}` utilities.
     */
    default: PropTypes.oneOf([
        '',
        'p-0',
        'p-1',
        'p-2',
        'p-3',
        'p-4',
        'p-5',
        'p-6',
        'p-8',
        'p-10',
        'p-12',
        'p-16',
        'p-20',
        'p-24',
        'p-32',
        'p-40',
        'p-48',
        'p-56',
        'p-64',
        'p-px',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Control the padding on all sides of an element using the `p-{size}` utilities.
     */
    sm: PropTypes.oneOf([
        '',
        'p-0',
        'p-1',
        'p-2',
        'p-3',
        'p-4',
        'p-5',
        'p-6',
        'p-8',
        'p-10',
        'p-12',
        'p-16',
        'p-20',
        'p-24',
        'p-32',
        'p-40',
        'p-48',
        'p-56',
        'p-64',
        'p-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the padding on all sides of an element using the `p-{size}` utilities.
     */
    md: PropTypes.oneOf([
        '',
        'p-0',
        'p-1',
        'p-2',
        'p-3',
        'p-4',
        'p-5',
        'p-6',
        'p-8',
        'p-10',
        'p-12',
        'p-16',
        'p-20',
        'p-24',
        'p-32',
        'p-40',
        'p-48',
        'p-56',
        'p-64',
        'p-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the padding on all sides of an element using the `p-{size}` utilities.
     */
    lg: PropTypes.oneOf([
        '',
        'p-0',
        'p-1',
        'p-2',
        'p-3',
        'p-4',
        'p-5',
        'p-6',
        'p-8',
        'p-10',
        'p-12',
        'p-16',
        'p-20',
        'p-24',
        'p-32',
        'p-40',
        'p-48',
        'p-56',
        'p-64',
        'p-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the padding on all sides of an element using the `p-{size}` utilities.
     */
    xl: PropTypes.oneOf([
        '',
        'p-0',
        'p-1',
        'p-2',
        'p-3',
        'p-4',
        'p-5',
        'p-6',
        'p-8',
        'p-10',
        'p-12',
        'p-16',
        'p-20',
        'p-24',
        'p-32',
        'p-40',
        'p-48',
        'p-56',
        'p-64',
        'p-px',
    ]),
};
