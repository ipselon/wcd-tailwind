import PropTypes from "prop-types";

export interface TopRightBottomLeftProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const TopRightBottomLeftTypes = {
    /**
     * #### all media
     * Use the `{top|right|bottom|left|inset}-0` utilities to anchor absolutely positioned elements against any of the edges of the nearest positioned parent.
     *
     * Combined with Tailwind's padding and margin utilities, you'll probably find that these are all you need to precisely control absolutely positioned elements.
     *
     */
    default: PropTypes.oneOf([
        '',
        'inset-0',
        'inset-y-0',
        'inset-x-0',
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'inset-auto',
        'inset-y-auto',
        'inset-x-auto',
        'top-auto',
        'bottom-auto',
        'left-auto',
        'right-auto',
    ]),
    sm: PropTypes.oneOf([
        '',
        'inset-0',
        'inset-y-0',
        'inset-x-0',
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'inset-auto',
        'inset-y-auto',
        'inset-x-auto',
        'top-auto',
        'bottom-auto',
        'left-auto',
        'right-auto',
    ]),
    md: PropTypes.oneOf([
        '',
        'inset-0',
        'inset-y-0',
        'inset-x-0',
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'inset-auto',
        'inset-y-auto',
        'inset-x-auto',
        'top-auto',
        'bottom-auto',
        'left-auto',
        'right-auto',
    ]),
    lg: PropTypes.oneOf([
        '',
        'inset-0',
        'inset-y-0',
        'inset-x-0',
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'inset-auto',
        'inset-y-auto',
        'inset-x-auto',
        'top-auto',
        'bottom-auto',
        'left-auto',
        'right-auto',
    ]),
    xl: PropTypes.oneOf([
        '',
        'inset-0',
        'inset-y-0',
        'inset-x-0',
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'inset-auto',
        'inset-y-auto',
        'inset-x-auto',
        'top-auto',
        'bottom-auto',
        'left-auto',
        'right-auto',
    ]),
};
