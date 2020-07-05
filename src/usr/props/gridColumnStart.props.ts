import PropTypes from "prop-types";

export interface GridColumnStartProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridColumnStartTypes = {
    /**
     * #### all media
     * Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
     */
    default: PropTypes.oneOf([
        '',
        'col-start-auto',
        'col-start-1',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
        'col-start-8',
        'col-start-9',
        'col-start-10',
        'col-start-11',
        'col-start-12',
        'col-start-13',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
     */
    sm: PropTypes.oneOf([
        '',
        'col-start-auto',
        'col-start-1',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
        'col-start-8',
        'col-start-9',
        'col-start-10',
        'col-start-11',
        'col-start-12',
        'col-start-13',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
     */
    md: PropTypes.oneOf([
        '',
        'col-start-auto',
        'col-start-1',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
        'col-start-8',
        'col-start-9',
        'col-start-10',
        'col-start-11',
        'col-start-12',
        'col-start-13',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
     */
    lg: PropTypes.oneOf([
        '',
        'col-start-auto',
        'col-start-1',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
        'col-start-8',
        'col-start-9',
        'col-start-10',
        'col-start-11',
        'col-start-12',
        'col-start-13',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
     */
    xl: PropTypes.oneOf([
        '',
        'col-start-auto',
        'col-start-1',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
        'col-start-8',
        'col-start-9',
        'col-start-10',
        'col-start-11',
        'col-start-12',
        'col-start-13',
    ]),
};
