import PropTypes from "prop-types";

export interface GridColumnEndProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridColumnEndTypes = {
    /**
     * #### all media
     * Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
     */
    default: PropTypes.oneOf([
        '',
        'col-end-auto',
        'col-end-1',
        'col-end-2',
        'col-end-3',
        'col-end-4',
        'col-end-5',
        'col-end-6',
        'col-end-7',
        'col-end-8',
        'col-end-9',
        'col-end-10',
        'col-end-11',
        'col-end-12',
        'col-end-13',
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
        'col-end-auto',
        'col-end-1',
        'col-end-2',
        'col-end-3',
        'col-end-4',
        'col-end-5',
        'col-end-6',
        'col-end-7',
        'col-end-8',
        'col-end-9',
        'col-end-10',
        'col-end-11',
        'col-end-12',
        'col-end-13',
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
        'col-end-auto',
        'col-end-1',
        'col-end-2',
        'col-end-3',
        'col-end-4',
        'col-end-5',
        'col-end-6',
        'col-end-7',
        'col-end-8',
        'col-end-9',
        'col-end-10',
        'col-end-11',
        'col-end-12',
        'col-end-13',
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
        'col-end-auto',
        'col-end-1',
        'col-end-2',
        'col-end-3',
        'col-end-4',
        'col-end-5',
        'col-end-6',
        'col-end-7',
        'col-end-8',
        'col-end-9',
        'col-end-10',
        'col-end-11',
        'col-end-12',
        'col-end-13',
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
        'col-end-auto',
        'col-end-1',
        'col-end-2',
        'col-end-3',
        'col-end-4',
        'col-end-5',
        'col-end-6',
        'col-end-7',
        'col-end-8',
        'col-end-9',
        'col-end-10',
        'col-end-11',
        'col-end-12',
        'col-end-13',
    ]),
};
