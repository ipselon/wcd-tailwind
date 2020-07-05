import PropTypes from "prop-types";

export interface SpaceBetweenHorizontalProps {
    default: string;
    defaultReverse: boolean;
    sm: string;
    smReverse: boolean;
    md: string;
    mdReverse: boolean;
    lg: string;
    lgReverse: boolean;
    xl: string;
    xlReverse: boolean;
}

export const SpaceBetweenHorizontalTypes = {
    /**
     * #### all media
     * Control the horizontal space between elements using the `space-x-{amount}` utilities.
     */
    default: PropTypes.oneOf([
        '',
        'space-x-0',
        'space-x-1',
        'space-x-2',
        'space-x-3',
        'space-x-4',
        'space-x-5',
        'space-x-6',
        'space-x-8',
        'space-x-10',
        'space-x-12',
        'space-x-16',
        'space-x-20',
        'space-x-24',
        'space-x-32',
        'space-x-40',
        'space-x-48',
        'space-x-56',
        'space-x-64',
        'space-x-px',
        '-space-x-1',
        '-space-x-2',
        '-space-x-3',
        '-space-x-4',
        '-space-x-5',
        '-space-x-6',
        '-space-x-8',
        '-space-x-10',
        '-space-x-12',
        '-space-x-16',
        '-space-x-20',
        '-space-x-24',
        '-space-x-32',
        '-space-x-40',
        '-space-x-48',
        '-space-x-56',
        '-space-x-64',
        '-space-x-px',
    ]),
    /**
     * #### all media
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-x-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    defaultReverse: PropTypes.bool,
    /**
     *  #### @media (min-width: 640px)
     * Control the horizontal space between elements using the `space-x-{amount}` utilities.
     */
    sm: PropTypes.oneOf([
        '',
        'space-x-0',
        'space-x-1',
        'space-x-2',
        'space-x-3',
        'space-x-4',
        'space-x-5',
        'space-x-6',
        'space-x-8',
        'space-x-10',
        'space-x-12',
        'space-x-16',
        'space-x-20',
        'space-x-24',
        'space-x-32',
        'space-x-40',
        'space-x-48',
        'space-x-56',
        'space-x-64',
        'space-x-px',
        '-space-x-1',
        '-space-x-2',
        '-space-x-3',
        '-space-x-4',
        '-space-x-5',
        '-space-x-6',
        '-space-x-8',
        '-space-x-10',
        '-space-x-12',
        '-space-x-16',
        '-space-x-20',
        '-space-x-24',
        '-space-x-32',
        '-space-x-40',
        '-space-x-48',
        '-space-x-56',
        '-space-x-64',
        '-space-x-px',
    ]),
    /**
     * #### @media (min-width: 640px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-x-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    smReverse: PropTypes.bool,
    /**
     * #### @media (min-width: 768px)
     * Control the horizontal space between elements using the `space-x-{amount}` utilities.
     */
    md: PropTypes.oneOf([
        '',
        'space-x-0',
        'space-x-1',
        'space-x-2',
        'space-x-3',
        'space-x-4',
        'space-x-5',
        'space-x-6',
        'space-x-8',
        'space-x-10',
        'space-x-12',
        'space-x-16',
        'space-x-20',
        'space-x-24',
        'space-x-32',
        'space-x-40',
        'space-x-48',
        'space-x-56',
        'space-x-64',
        'space-x-px',
        '-space-x-1',
        '-space-x-2',
        '-space-x-3',
        '-space-x-4',
        '-space-x-5',
        '-space-x-6',
        '-space-x-8',
        '-space-x-10',
        '-space-x-12',
        '-space-x-16',
        '-space-x-20',
        '-space-x-24',
        '-space-x-32',
        '-space-x-40',
        '-space-x-48',
        '-space-x-56',
        '-space-x-64',
        '-space-x-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-x-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    mdReverse: PropTypes.bool,
    /**
     * #### @media (min-width: 1024px)
     * Control the horizontal space between elements using the `space-x-{amount}` utilities.
     */
    lg: PropTypes.oneOf([
        '',
        'space-x-0',
        'space-x-1',
        'space-x-2',
        'space-x-3',
        'space-x-4',
        'space-x-5',
        'space-x-6',
        'space-x-8',
        'space-x-10',
        'space-x-12',
        'space-x-16',
        'space-x-20',
        'space-x-24',
        'space-x-32',
        'space-x-40',
        'space-x-48',
        'space-x-56',
        'space-x-64',
        'space-x-px',
        '-space-x-1',
        '-space-x-2',
        '-space-x-3',
        '-space-x-4',
        '-space-x-5',
        '-space-x-6',
        '-space-x-8',
        '-space-x-10',
        '-space-x-12',
        '-space-x-16',
        '-space-x-20',
        '-space-x-24',
        '-space-x-32',
        '-space-x-40',
        '-space-x-48',
        '-space-x-56',
        '-space-x-64',
        '-space-x-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-x-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    lgReverse: PropTypes.bool,
    /**
     * #### @media (min-width: 1280px)
     * Control the horizontal space between elements using the `space-x-{amount}` utilities.
     */
    xl: PropTypes.oneOf([
        '',
        'space-x-0',
        'space-x-1',
        'space-x-2',
        'space-x-3',
        'space-x-4',
        'space-x-5',
        'space-x-6',
        'space-x-8',
        'space-x-10',
        'space-x-12',
        'space-x-16',
        'space-x-20',
        'space-x-24',
        'space-x-32',
        'space-x-40',
        'space-x-48',
        'space-x-56',
        'space-x-64',
        'space-x-px',
        '-space-x-1',
        '-space-x-2',
        '-space-x-3',
        '-space-x-4',
        '-space-x-5',
        '-space-x-6',
        '-space-x-8',
        '-space-x-10',
        '-space-x-12',
        '-space-x-16',
        '-space-x-20',
        '-space-x-24',
        '-space-x-32',
        '-space-x-40',
        '-space-x-48',
        '-space-x-56',
        '-space-x-64',
        '-space-x-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-x-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    xlReverse: PropTypes.bool,
};
