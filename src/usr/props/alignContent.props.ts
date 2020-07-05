import PropTypes from "prop-types";

export interface AlignContentProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const AlignContentTypes = {
    /**
     * #### all media
     * * Use `content-start` to pack lines in a flex container against the start of the cross axis.
     * * Use `content-center` to pack lines in a flex container in the center of the cross axis.
     * * Use `content-end` to pack lines in a flex container against the end of the cross axis.
     * * Use `content-between` to distribute lines in a flex container such that there is an equal amount of space between each line.
     * * Use `content-around` to distribute lines in a flex container such that there is an equal amount of space around each line.
     */
    default: PropTypes.oneOf([
        '',
        'content-start',
        'content-center',
        'content-end',
        'content-between',
        'content-around',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `content-start` to pack lines in a flex container against the start of the cross axis.
     * * Use `content-center` to pack lines in a flex container in the center of the cross axis.
     * * Use `content-end` to pack lines in a flex container against the end of the cross axis.
     * * Use `content-between` to distribute lines in a flex container such that there is an equal amount of space between each line.
     * * Use `content-around` to distribute lines in a flex container such that there is an equal amount of space around each line.
     */
    sm: PropTypes.oneOf([
        '',
        'content-start',
        'content-center',
        'content-end',
        'content-between',
        'content-around',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `content-start` to pack lines in a flex container against the start of the cross axis.
     * * Use `content-center` to pack lines in a flex container in the center of the cross axis.
     * * Use `content-end` to pack lines in a flex container against the end of the cross axis.
     * * Use `content-between` to distribute lines in a flex container such that there is an equal amount of space between each line.
     * * Use `content-around` to distribute lines in a flex container such that there is an equal amount of space around each line.
     */
    md: PropTypes.oneOf([
        '',
        'content-start',
        'content-center',
        'content-end',
        'content-between',
        'content-around',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `content-start` to pack lines in a flex container against the start of the cross axis.
     * * Use `content-center` to pack lines in a flex container in the center of the cross axis.
     * * Use `content-end` to pack lines in a flex container against the end of the cross axis.
     * * Use `content-between` to distribute lines in a flex container such that there is an equal amount of space between each line.
     * * Use `content-around` to distribute lines in a flex container such that there is an equal amount of space around each line.
     */
    lg: PropTypes.oneOf([
        '',
        'content-start',
        'content-center',
        'content-end',
        'content-between',
        'content-around',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `content-start` to pack lines in a flex container against the start of the cross axis.
     * * Use `content-center` to pack lines in a flex container in the center of the cross axis.
     * * Use `content-end` to pack lines in a flex container against the end of the cross axis.
     * * Use `content-between` to distribute lines in a flex container such that there is an equal amount of space between each line.
     * * Use `content-around` to distribute lines in a flex container such that there is an equal amount of space around each line.
     */
    xl: PropTypes.oneOf([
        '',
        'content-start',
        'content-center',
        'content-end',
        'content-between',
        'content-around',
    ]),
};
