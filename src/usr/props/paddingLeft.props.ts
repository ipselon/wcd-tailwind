import PropTypes from "prop-types";

export interface PaddingLeftProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingLeftTypes = {
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
        'pl-0',
        'pl-1',
        'pl-2',
        'pl-3',
        'pl-4',
        'pl-5',
        'pl-6',
        'pl-8',
        'pl-10',
        'pl-12',
        'pl-16',
        'pl-20',
        'pl-24',
        'pl-32',
        'pl-40',
        'pl-48',
        'pl-56',
        'pl-64',
        'pl-px',
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
        'pl-0',
        'pl-1',
        'pl-2',
        'pl-3',
        'pl-4',
        'pl-5',
        'pl-6',
        'pl-8',
        'pl-10',
        'pl-12',
        'pl-16',
        'pl-20',
        'pl-24',
        'pl-32',
        'pl-40',
        'pl-48',
        'pl-56',
        'pl-64',
        'pl-px',
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
        'pl-0',
        'pl-1',
        'pl-2',
        'pl-3',
        'pl-4',
        'pl-5',
        'pl-6',
        'pl-8',
        'pl-10',
        'pl-12',
        'pl-16',
        'pl-20',
        'pl-24',
        'pl-32',
        'pl-40',
        'pl-48',
        'pl-56',
        'pl-64',
        'pl-px',
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
        'pl-0',
        'pl-1',
        'pl-2',
        'pl-3',
        'pl-4',
        'pl-5',
        'pl-6',
        'pl-8',
        'pl-10',
        'pl-12',
        'pl-16',
        'pl-20',
        'pl-24',
        'pl-32',
        'pl-40',
        'pl-48',
        'pl-56',
        'pl-64',
        'pl-px',
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
        'pl-0',
        'pl-1',
        'pl-2',
        'pl-3',
        'pl-4',
        'pl-5',
        'pl-6',
        'pl-8',
        'pl-10',
        'pl-12',
        'pl-16',
        'pl-20',
        'pl-24',
        'pl-32',
        'pl-40',
        'pl-48',
        'pl-56',
        'pl-64',
        'pl-px',
    ]),
};
