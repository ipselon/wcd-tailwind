import PropTypes from "prop-types";

export interface PaddingRightProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingRightTypes = {
    /**
     * #### all media
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
     */
    default: PropTypes.oneOf([
        '',
        'pr-0',
        'pr-1',
        'pr-2',
        'pr-3',
        'pr-4',
        'pr-5',
        'pr-6',
        'pr-8',
        'pr-10',
        'pr-12',
        'pr-16',
        'pr-20',
        'pr-24',
        'pr-32',
        'pr-40',
        'pr-48',
        'pr-56',
        'pr-64',
        'pr-px',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
     */
    sm: PropTypes.oneOf([
        '',
        'pr-0',
        'pr-1',
        'pr-2',
        'pr-3',
        'pr-4',
        'pr-5',
        'pr-6',
        'pr-8',
        'pr-10',
        'pr-12',
        'pr-16',
        'pr-20',
        'pr-24',
        'pr-32',
        'pr-40',
        'pr-48',
        'pr-56',
        'pr-64',
        'pr-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
     */
    md: PropTypes.oneOf([
        '',
        'pr-0',
        'pr-1',
        'pr-2',
        'pr-3',
        'pr-4',
        'pr-5',
        'pr-6',
        'pr-8',
        'pr-10',
        'pr-12',
        'pr-16',
        'pr-20',
        'pr-24',
        'pr-32',
        'pr-40',
        'pr-48',
        'pr-56',
        'pr-64',
        'pr-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
     */
    lg: PropTypes.oneOf([
        '',
        'pr-0',
        'pr-1',
        'pr-2',
        'pr-3',
        'pr-4',
        'pr-5',
        'pr-6',
        'pr-8',
        'pr-10',
        'pr-12',
        'pr-16',
        'pr-20',
        'pr-24',
        'pr-32',
        'pr-40',
        'pr-48',
        'pr-56',
        'pr-64',
        'pr-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
     */
    xl: PropTypes.oneOf([
        '',
        'pr-0',
        'pr-1',
        'pr-2',
        'pr-3',
        'pr-4',
        'pr-5',
        'pr-6',
        'pr-8',
        'pr-10',
        'pr-12',
        'pr-16',
        'pr-20',
        'pr-24',
        'pr-32',
        'pr-40',
        'pr-48',
        'pr-56',
        'pr-64',
        'pr-px',
    ]),
};
