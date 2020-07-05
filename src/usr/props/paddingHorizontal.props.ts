import PropTypes from "prop-types";

export interface PaddingHorizontalProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingHorizontalTypes = {
    /**
     * #### all media
     * Control the horizontal padding of an element using the `px-{size}` utilities.
     */
    default: PropTypes.oneOf([
        '',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'px-8',
        'px-10',
        'px-12',
        'px-16',
        'px-20',
        'px-24',
        'px-32',
        'px-40',
        'px-48',
        'px-56',
        'px-64',
        'px-px',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Control the horizontal padding of an element using the `px-{size}` utilities.
     */
    sm: PropTypes.oneOf([
        '',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'px-8',
        'px-10',
        'px-12',
        'px-16',
        'px-20',
        'px-24',
        'px-32',
        'px-40',
        'px-48',
        'px-56',
        'px-64',
        'px-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the horizontal padding of an element using the `px-{size}` utilities.
     */
    md: PropTypes.oneOf([
        '',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'px-8',
        'px-10',
        'px-12',
        'px-16',
        'px-20',
        'px-24',
        'px-32',
        'px-40',
        'px-48',
        'px-56',
        'px-64',
        'px-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the horizontal padding of an element using the `px-{size}` utilities.
     */
    lg: PropTypes.oneOf([
        '',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'px-8',
        'px-10',
        'px-12',
        'px-16',
        'px-20',
        'px-24',
        'px-32',
        'px-40',
        'px-48',
        'px-56',
        'px-64',
        'px-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the horizontal padding of an element using the `px-{size}` utilities.
     */
    xl: PropTypes.oneOf([
        '',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'px-8',
        'px-10',
        'px-12',
        'px-16',
        'px-20',
        'px-24',
        'px-32',
        'px-40',
        'px-48',
        'px-56',
        'px-64',
        'px-px',
    ]),
};
