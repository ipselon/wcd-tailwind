import PropTypes from "prop-types";

export interface GridRowEndProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridRowEndTypes = {
    /**
     * #### all media
     * Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
     */

    default: PropTypes.oneOf([
        '',
        'row-end-auto',
        'row-end-1',
        'row-end-2',
        'row-end-3',
        'row-end-4',
        'row-end-5',
        'row-end-6',
        'row-end-7',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
     */
    sm: PropTypes.oneOf([
        '',
        'row-end-auto',
        'row-end-1',
        'row-end-2',
        'row-end-3',
        'row-end-4',
        'row-end-5',
        'row-end-6',
        'row-end-7',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
     */
    md: PropTypes.oneOf([
        '',
        'row-end-auto',
        'row-end-1',
        'row-end-2',
        'row-end-3',
        'row-end-4',
        'row-end-5',
        'row-end-6',
        'row-end-7',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
     */
    lg: PropTypes.oneOf([
        '',
        'row-end-auto',
        'row-end-1',
        'row-end-2',
        'row-end-3',
        'row-end-4',
        'row-end-5',
        'row-end-6',
        'row-end-7',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
     */
    xl: PropTypes.oneOf([
        '',
        'row-end-auto',
        'row-end-1',
        'row-end-2',
        'row-end-3',
        'row-end-4',
        'row-end-5',
        'row-end-6',
        'row-end-7',
    ]),
};
