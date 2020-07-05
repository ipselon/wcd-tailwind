import PropTypes from "prop-types";

export interface GridRowStartProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const GridRowStartTypes = {
    /**
     * #### all media
     * Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line.
     * These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.
     *
     * Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
     */

    default: PropTypes.oneOf([
        '',
        'row-start-auto',
        'row-start-1',
        'row-start-2',
        'row-start-3',
        'row-start-4',
        'row-start-5',
        'row-start-6',
        'row-start-7',
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
        'row-start-auto',
        'row-start-1',
        'row-start-2',
        'row-start-3',
        'row-start-4',
        'row-start-5',
        'row-start-6',
        'row-start-7',
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
        'row-start-auto',
        'row-start-1',
        'row-start-2',
        'row-start-3',
        'row-start-4',
        'row-start-5',
        'row-start-6',
        'row-start-7',
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
        'row-start-auto',
        'row-start-1',
        'row-start-2',
        'row-start-3',
        'row-start-4',
        'row-start-5',
        'row-start-6',
        'row-start-7',
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
        'row-start-auto',
        'row-start-1',
        'row-start-2',
        'row-start-3',
        'row-start-4',
        'row-start-5',
        'row-start-6',
        'row-start-7',
    ]),
};
