import PropTypes from "prop-types";

export interface MarginLeftProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const MarginLeftTypes = {
    /**
     * #### all media
     * Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.
     *
     * For example, mt-6 would add 1.5rem of margin to the top of an element,
     * mr-4 would add 1rem of margin to the right of an element,
     * mb-8 would add 2rem of margin to the bottom of an element,
     * and ml-2 would add 0.5rem of margin to the left of an element.
     */
    default: PropTypes.oneOf([
        '',
        'ml-0',
        'ml-1',
        'ml-2',
        'ml-3',
        'ml-4',
        'ml-5',
        'ml-6',
        'ml-8',
        'ml-10',
        'ml-12',
        'ml-16',
        'ml-20',
        'ml-24',
        'ml-32',
        'ml-40',
        'ml-48',
        'ml-56',
        'ml-64',
        'ml-auto',
        'ml-px',
        '-ml-1',
        '-ml-2',
        '-ml-3',
        '-ml-4',
        '-ml-5',
        '-ml-6',
        '-ml-8',
        '-ml-10',
        '-ml-12',
        '-ml-16',
        '-ml-20',
        '-ml-24',
        '-ml-32',
        '-ml-40',
        '-ml-48',
        '-ml-56',
        '-ml-64',
        '-ml-px',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.
     *
     * For example, mt-6 would add 1.5rem of margin to the top of an element,
     * mr-4 would add 1rem of margin to the right of an element,
     * mb-8 would add 2rem of margin to the bottom of an element,
     * and ml-2 would add 0.5rem of margin to the left of an element.
     */
    sm: PropTypes.oneOf([
        '',
        'ml-0',
        'ml-1',
        'ml-2',
        'ml-3',
        'ml-4',
        'ml-5',
        'ml-6',
        'ml-8',
        'ml-10',
        'ml-12',
        'ml-16',
        'ml-20',
        'ml-24',
        'ml-32',
        'ml-40',
        'ml-48',
        'ml-56',
        'ml-64',
        'ml-auto',
        'ml-px',
        '-ml-1',
        '-ml-2',
        '-ml-3',
        '-ml-4',
        '-ml-5',
        '-ml-6',
        '-ml-8',
        '-ml-10',
        '-ml-12',
        '-ml-16',
        '-ml-20',
        '-ml-24',
        '-ml-32',
        '-ml-40',
        '-ml-48',
        '-ml-56',
        '-ml-64',
        '-ml-px',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.
     *
     * For example, mt-6 would add 1.5rem of margin to the top of an element,
     * mr-4 would add 1rem of margin to the right of an element,
     * mb-8 would add 2rem of margin to the bottom of an element,
     * and ml-2 would add 0.5rem of margin to the left of an element.
     */
    md: PropTypes.oneOf([
        '',
        'ml-0',
        'ml-1',
        'ml-2',
        'ml-3',
        'ml-4',
        'ml-5',
        'ml-6',
        'ml-8',
        'ml-10',
        'ml-12',
        'ml-16',
        'ml-20',
        'ml-24',
        'ml-32',
        'ml-40',
        'ml-48',
        'ml-56',
        'ml-64',
        'ml-auto',
        'ml-px',
        '-ml-1',
        '-ml-2',
        '-ml-3',
        '-ml-4',
        '-ml-5',
        '-ml-6',
        '-ml-8',
        '-ml-10',
        '-ml-12',
        '-ml-16',
        '-ml-20',
        '-ml-24',
        '-ml-32',
        '-ml-40',
        '-ml-48',
        '-ml-56',
        '-ml-64',
        '-ml-px',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.
     *
     * For example, mt-6 would add 1.5rem of margin to the top of an element,
     * mr-4 would add 1rem of margin to the right of an element,
     * mb-8 would add 2rem of margin to the bottom of an element,
     * and ml-2 would add 0.5rem of margin to the left of an element.
     */
    lg: PropTypes.oneOf([
        '',
        'ml-0',
        'ml-1',
        'ml-2',
        'ml-3',
        'ml-4',
        'ml-5',
        'ml-6',
        'ml-8',
        'ml-10',
        'ml-12',
        'ml-16',
        'ml-20',
        'ml-24',
        'ml-32',
        'ml-40',
        'ml-48',
        'ml-56',
        'ml-64',
        'ml-auto',
        'ml-px',
        '-ml-1',
        '-ml-2',
        '-ml-3',
        '-ml-4',
        '-ml-5',
        '-ml-6',
        '-ml-8',
        '-ml-10',
        '-ml-12',
        '-ml-16',
        '-ml-20',
        '-ml-24',
        '-ml-32',
        '-ml-40',
        '-ml-48',
        '-ml-56',
        '-ml-64',
        '-ml-px',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.
     *
     * For example, mt-6 would add 1.5rem of margin to the top of an element,
     * mr-4 would add 1rem of margin to the right of an element,
     * mb-8 would add 2rem of margin to the bottom of an element,
     * and ml-2 would add 0.5rem of margin to the left of an element.
     */
    xl: PropTypes.oneOf([
        '',
        'ml-0',
        'ml-1',
        'ml-2',
        'ml-3',
        'ml-4',
        'ml-5',
        'ml-6',
        'ml-8',
        'ml-10',
        'ml-12',
        'ml-16',
        'ml-20',
        'ml-24',
        'ml-32',
        'ml-40',
        'ml-48',
        'ml-56',
        'ml-64',
        'ml-auto',
        'ml-px',
        '-ml-1',
        '-ml-2',
        '-ml-3',
        '-ml-4',
        '-ml-5',
        '-ml-6',
        '-ml-8',
        '-ml-10',
        '-ml-12',
        '-ml-16',
        '-ml-20',
        '-ml-24',
        '-ml-32',
        '-ml-40',
        '-ml-48',
        '-ml-56',
        '-ml-64',
        '-ml-px',
    ]),
};
