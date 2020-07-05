import PropTypes from "prop-types";

export interface VisibilityProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const VisibilityTypes = {
    /**
     * #### all media
     * * Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.
     * * Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements.
     */
    default: PropTypes.oneOf([
        '',
        'visible',
        'invisible',
    ]),
    /**
     * #### @media (min-width: 640px)
     * * Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.
     * * Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements.
     */
    sm: PropTypes.oneOf([
        '',
        'visible',
        'invisible',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.
     * * Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements.
     */
    md: PropTypes.oneOf([
        '',
        'visible',
        'invisible',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.
     * * Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements.
     */
    lg: PropTypes.oneOf([
        '',
        'visible',
        'invisible',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.
     * * Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements.
     */
    xl: PropTypes.oneOf([
        '',
        'visible',
        'invisible',
    ]),
};
