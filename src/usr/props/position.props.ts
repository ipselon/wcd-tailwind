import PropTypes from "prop-types";

export interface PositionProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const PositionTypes = {
    /**
     * #### all media
     * * Use `static` to position an element according to the normal flow of the document. Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.
     * * Use `relative` to position an element according to the normal flow of the document. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     * * Use `absolute` to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist. Offsets are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.
     * * Use `fixed` to position an element relative to the browser window. Offsets are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.
     * * Use `sticky` to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     */
    default: PropTypes.oneOf([
        '',
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
    ]),
    /**
     * #### @media (min-width: 640px)
     * * Use `static` to position an element according to the normal flow of the document. Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.
     * * Use `relative` to position an element according to the normal flow of the document. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     * * Use `absolute` to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist. Offsets are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.
     * * Use `fixed` to position an element relative to the browser window. Offsets are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.
     * * Use `sticky` to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     */
    sm: PropTypes.oneOf([
        '',
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `static` to position an element according to the normal flow of the document. Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.
     * * Use `relative` to position an element according to the normal flow of the document. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     * * Use `absolute` to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist. Offsets are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.
     * * Use `fixed` to position an element relative to the browser window. Offsets are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.
     * * Use `sticky` to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     */
    md: PropTypes.oneOf([
        '',
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `static` to position an element according to the normal flow of the document. Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.
     * * Use `relative` to position an element according to the normal flow of the document. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     * * Use `absolute` to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist. Offsets are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.
     * * Use `fixed` to position an element relative to the browser window. Offsets are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.
     * * Use `sticky` to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     */
    lg: PropTypes.oneOf([
        '',
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `static` to position an element according to the normal flow of the document. Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.
     * * Use `relative` to position an element according to the normal flow of the document. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     * * Use `absolute` to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist. Offsets are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.
     * * Use `fixed` to position an element relative to the browser window. Offsets are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.
     * * Use `sticky` to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
     */
    xl: PropTypes.oneOf([
        '',
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
    ]),
};
