import PropTypes from "prop-types";

export interface PaddingVerticalProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingVerticalTypes = {
    /**
     * #### all media
     * Control the vertical padding of an element using the `py-{size}` utilities.
     */
    default: PropTypes.oneOf([
        '',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'py-8',
        'py-10',
        'py-12',
        'py-16',
        'py-20',
        'py-24',
        'py-32',
        'py-40',
        'py-48',
        'py-56',
        'py-64',
        'py-px',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Control the vertical padding of an element using the `py-{size}` utilities.
     */
    sm: PropTypes.oneOf([
        '',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'py-8',
        'py-10',
        'py-12',
        'py-16',
        'py-20',
        'py-24',
        'py-32',
        'py-40',
        'py-48',
        'py-56',
        'py-64',
        'py-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the vertical padding of an element using the `py-{size}` utilities.
     */
    md: PropTypes.oneOf([
        '',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'py-8',
        'py-10',
        'py-12',
        'py-16',
        'py-20',
        'py-24',
        'py-32',
        'py-40',
        'py-48',
        'py-56',
        'py-64',
        'py-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the vertical padding of an element using the `py-{size}` utilities.
     */
    lg: PropTypes.oneOf([
        '',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'py-8',
        'py-10',
        'py-12',
        'py-16',
        'py-20',
        'py-24',
        'py-32',
        'py-40',
        'py-48',
        'py-56',
        'py-64',
        'py-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the vertical padding of an element using the `py-{size}` utilities.
     */
    xl: PropTypes.oneOf([
        '',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'py-8',
        'py-10',
        'py-12',
        'py-16',
        'py-20',
        'py-24',
        'py-32',
        'py-40',
        'py-48',
        'py-56',
        'py-64',
        'py-px',
    ]),
};
