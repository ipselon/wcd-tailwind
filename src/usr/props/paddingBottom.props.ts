import PropTypes from "prop-types";

export interface PaddingBottomProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingBottomTypes = {
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
        'pb-0',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pb-5',
        'pb-6',
        'pb-8',
        'pb-10',
        'pb-12',
        'pb-16',
        'pb-20',
        'pb-24',
        'pb-32',
        'pb-40',
        'pb-48',
        'pb-56',
        'pb-64',
        'pb-px',
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
        'pb-0',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pb-5',
        'pb-6',
        'pb-8',
        'pb-10',
        'pb-12',
        'pb-16',
        'pb-20',
        'pb-24',
        'pb-32',
        'pb-40',
        'pb-48',
        'pb-56',
        'pb-64',
        'pb-px',
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
        'pb-0',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pb-5',
        'pb-6',
        'pb-8',
        'pb-10',
        'pb-12',
        'pb-16',
        'pb-20',
        'pb-24',
        'pb-32',
        'pb-40',
        'pb-48',
        'pb-56',
        'pb-64',
        'pb-px',
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
        'pb-0',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pb-5',
        'pb-6',
        'pb-8',
        'pb-10',
        'pb-12',
        'pb-16',
        'pb-20',
        'pb-24',
        'pb-32',
        'pb-40',
        'pb-48',
        'pb-56',
        'pb-64',
        'pb-px',
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
        'pb-0',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pb-5',
        'pb-6',
        'pb-8',
        'pb-10',
        'pb-12',
        'pb-16',
        'pb-20',
        'pb-24',
        'pb-32',
        'pb-40',
        'pb-48',
        'pb-56',
        'pb-64',
        'pb-px',
    ]),
};
