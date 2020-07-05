import PropTypes from "prop-types";

export interface PaddingTopProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PaddingTopTypes = {
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
        'pt-0',
        'pt-1',
        'pt-2',
        'pt-3',
        'pt-4',
        'pt-5',
        'pt-6',
        'pt-8',
        'pt-10',
        'pt-12',
        'pt-16',
        'pt-20',
        'pt-24',
        'pt-32',
        'pt-40',
        'pt-48',
        'pt-56',
        'pt-64',
        'pt-px',
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
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
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
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
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
     * Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.
     *
     * For example, pt-6 would add 1.5rem of padding to the top of an element,
     * pr-4 would add 1rem of padding to the right of an element,
     * pb-8 would add 2rem of padding to the bottom of an element,
     * and pl-2 would add 0.5rem of padding to the left of an element.
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
