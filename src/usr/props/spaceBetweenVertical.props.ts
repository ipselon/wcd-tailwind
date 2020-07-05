import PropTypes from "prop-types";

export interface SpaceBetweenVerticalProps {
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

export const SpaceBetweenVerticalTypes = {
    /**
     * #### all media
     * Control the vertical space between elements using the `space-y-{amount}` utilities.
     */
    default: PropTypes.oneOf([
        '',
        'space-y-0',
        'space-y-1',
        'space-y-2',
        'space-y-3',
        'space-y-4',
        'space-y-5',
        'space-y-6',
        'space-y-8',
        'space-y-10',
        'space-y-12',
        'space-y-16',
        'space-y-20',
        'space-y-24',
        'space-y-32',
        'space-y-40',
        'space-y-48',
        'space-y-56',
        'space-y-64',
        'space-y-px',
        '-space-y-1',
        '-space-y-2',
        '-space-y-3',
        '-space-y-4',
        '-space-y-5',
        '-space-y-6',
        '-space-y-8',
        '-space-y-10',
        '-space-y-12',
        '-space-y-16',
        '-space-y-20',
        '-space-y-24',
        '-space-y-32',
        '-space-y-40',
        '-space-y-48',
        '-space-y-56',
        '-space-y-64',
        '-space-y-px',
    ]),
    /**
     * #### all media
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    defaultReverse: PropTypes.bool,
    /**
     *  #### @media (min-width: 640px)
     * Control the vertical space between elements using the `space-y-{amount}` utilities.
     */
    sm: PropTypes.oneOf([
        '',
        'space-y-0',
        'space-y-1',
        'space-y-2',
        'space-y-3',
        'space-y-4',
        'space-y-5',
        'space-y-6',
        'space-y-8',
        'space-y-10',
        'space-y-12',
        'space-y-16',
        'space-y-20',
        'space-y-24',
        'space-y-32',
        'space-y-40',
        'space-y-48',
        'space-y-56',
        'space-y-64',
        'space-y-px',
        '-space-y-1',
        '-space-y-2',
        '-space-y-3',
        '-space-y-4',
        '-space-y-5',
        '-space-y-6',
        '-space-y-8',
        '-space-y-10',
        '-space-y-12',
        '-space-y-16',
        '-space-y-20',
        '-space-y-24',
        '-space-y-32',
        '-space-y-40',
        '-space-y-48',
        '-space-y-56',
        '-space-y-64',
        '-space-y-px',
    ]),
    /**
     * #### @media (min-width: 640px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    smReverse: PropTypes.bool,
    /**
     * #### @media (min-width: 768px)
     * Control the vertical space between elements using the `space-y-{amount}` utilities.
     */
    md: PropTypes.oneOf([
        '',
        'space-y-0',
        'space-y-1',
        'space-y-2',
        'space-y-3',
        'space-y-4',
        'space-y-5',
        'space-y-6',
        'space-y-8',
        'space-y-10',
        'space-y-12',
        'space-y-16',
        'space-y-20',
        'space-y-24',
        'space-y-32',
        'space-y-40',
        'space-y-48',
        'space-y-56',
        'space-y-64',
        'space-y-px',
        '-space-y-1',
        '-space-y-2',
        '-space-y-3',
        '-space-y-4',
        '-space-y-5',
        '-space-y-6',
        '-space-y-8',
        '-space-y-10',
        '-space-y-12',
        '-space-y-16',
        '-space-y-20',
        '-space-y-24',
        '-space-y-32',
        '-space-y-40',
        '-space-y-48',
        '-space-y-56',
        '-space-y-64',
        '-space-y-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    mdReverse: PropTypes.bool,
    /**
     * #### @media (min-width: 1024px)
     * Control the vertical space between elements using the `space-y-{amount}` utilities.
     */
    lg: PropTypes.oneOf([
        '',
        'space-y-0',
        'space-y-1',
        'space-y-2',
        'space-y-3',
        'space-y-4',
        'space-y-5',
        'space-y-6',
        'space-y-8',
        'space-y-10',
        'space-y-12',
        'space-y-16',
        'space-y-20',
        'space-y-24',
        'space-y-32',
        'space-y-40',
        'space-y-48',
        'space-y-56',
        'space-y-64',
        'space-y-px',
        '-space-y-1',
        '-space-y-2',
        '-space-y-3',
        '-space-y-4',
        '-space-y-5',
        '-space-y-6',
        '-space-y-8',
        '-space-y-10',
        '-space-y-12',
        '-space-y-16',
        '-space-y-20',
        '-space-y-24',
        '-space-y-32',
        '-space-y-40',
        '-space-y-48',
        '-space-y-56',
        '-space-y-64',
        '-space-y-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    lgReverse: PropTypes.bool,
    /**
     * #### @media (min-width: 1280px)
     * Control the vertical space between elements using the `space-y-{amount}` utilities.
     */
    xl: PropTypes.oneOf([
        '',
        'space-y-0',
        'space-y-1',
        'space-y-2',
        'space-y-3',
        'space-y-4',
        'space-y-5',
        'space-y-6',
        'space-y-8',
        'space-y-10',
        'space-y-12',
        'space-y-16',
        'space-y-20',
        'space-y-24',
        'space-y-32',
        'space-y-40',
        'space-y-48',
        'space-y-56',
        'space-y-64',
        'space-y-px',
        '-space-y-1',
        '-space-y-2',
        '-space-y-3',
        '-space-y-4',
        '-space-y-5',
        '-space-y-6',
        '-space-y-8',
        '-space-y-10',
        '-space-y-12',
        '-space-y-16',
        '-space-y-20',
        '-space-y-24',
        '-space-y-32',
        '-space-y-40',
        '-space-y-48',
        '-space-y-56',
        '-space-y-64',
        '-space-y-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`),
     * use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.
     */
    xlReverse: PropTypes.bool,
};
