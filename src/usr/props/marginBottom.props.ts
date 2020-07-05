import PropTypes from "prop-types";

export interface MarginBottomProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const MarginBottomTypes = {
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
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'mb-6',
        'mb-8',
        'mb-10',
        'mb-12',
        'mb-16',
        'mb-20',
        'mb-24',
        'mb-32',
        'mb-40',
        'mb-48',
        'mb-56',
        'mb-64',
        'mb-auto',
        'mb-px',
        '-mb-1',
        '-mb-2',
        '-mb-3',
        '-mb-4',
        '-mb-5',
        '-mb-6',
        '-mb-8',
        '-mb-10',
        '-mb-12',
        '-mb-16',
        '-mb-20',
        '-mb-24',
        '-mb-32',
        '-mb-40',
        '-mb-48',
        '-mb-56',
        '-mb-64',
        '-mb-px',
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
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'mb-6',
        'mb-8',
        'mb-10',
        'mb-12',
        'mb-16',
        'mb-20',
        'mb-24',
        'mb-32',
        'mb-40',
        'mb-48',
        'mb-56',
        'mb-64',
        'mb-auto',
        'mb-px',
        '-mb-1',
        '-mb-2',
        '-mb-3',
        '-mb-4',
        '-mb-5',
        '-mb-6',
        '-mb-8',
        '-mb-10',
        '-mb-12',
        '-mb-16',
        '-mb-20',
        '-mb-24',
        '-mb-32',
        '-mb-40',
        '-mb-48',
        '-mb-56',
        '-mb-64',
        '-mb-px',
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
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'mb-6',
        'mb-8',
        'mb-10',
        'mb-12',
        'mb-16',
        'mb-20',
        'mb-24',
        'mb-32',
        'mb-40',
        'mb-48',
        'mb-56',
        'mb-64',
        'mb-auto',
        'mb-px',
        '-mb-1',
        '-mb-2',
        '-mb-3',
        '-mb-4',
        '-mb-5',
        '-mb-6',
        '-mb-8',
        '-mb-10',
        '-mb-12',
        '-mb-16',
        '-mb-20',
        '-mb-24',
        '-mb-32',
        '-mb-40',
        '-mb-48',
        '-mb-56',
        '-mb-64',
        '-mb-px',
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
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'mb-6',
        'mb-8',
        'mb-10',
        'mb-12',
        'mb-16',
        'mb-20',
        'mb-24',
        'mb-32',
        'mb-40',
        'mb-48',
        'mb-56',
        'mb-64',
        'mb-auto',
        'mb-px',
        '-mb-1',
        '-mb-2',
        '-mb-3',
        '-mb-4',
        '-mb-5',
        '-mb-6',
        '-mb-8',
        '-mb-10',
        '-mb-12',
        '-mb-16',
        '-mb-20',
        '-mb-24',
        '-mb-32',
        '-mb-40',
        '-mb-48',
        '-mb-56',
        '-mb-64',
        '-mb-px',
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
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'mb-6',
        'mb-8',
        'mb-10',
        'mb-12',
        'mb-16',
        'mb-20',
        'mb-24',
        'mb-32',
        'mb-40',
        'mb-48',
        'mb-56',
        'mb-64',
        'mb-auto',
        'mb-px',
        '-mb-1',
        '-mb-2',
        '-mb-3',
        '-mb-4',
        '-mb-5',
        '-mb-6',
        '-mb-8',
        '-mb-10',
        '-mb-12',
        '-mb-16',
        '-mb-20',
        '-mb-24',
        '-mb-32',
        '-mb-40',
        '-mb-48',
        '-mb-56',
        '-mb-64',
        '-mb-px',
    ]),
};
