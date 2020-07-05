import PropTypes from "prop-types";

export interface FlexWrapProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const FlexWrapTypes = {
    /**
     * #### all media
     * * Use `flex-no-wrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.
     * * Use `flex-wrap` to allow flex items to wrap.
     * * Use `flex-wrap-reverse` to wrap flex items in the reverse direction.
     */
    default: PropTypes.oneOf([
        '',
        'flex-no-wrap',
        'flex-wrap',
        'flex-wrap-reverse',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `flex-no-wrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.
     * * Use `flex-wrap` to allow flex items to wrap.
     * * Use `flex-wrap-reverse` to wrap flex items in the reverse direction.
     */
    sm: PropTypes.oneOf([
        '',
        'flex-no-wrap',
        'flex-wrap',
        'flex-wrap-reverse',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `flex-no-wrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.
     * * Use `flex-wrap` to allow flex items to wrap.
     * * Use `flex-wrap-reverse` to wrap flex items in the reverse direction.
     */
    md: PropTypes.oneOf([
        '',
        'flex-no-wrap',
        'flex-wrap',
        'flex-wrap-reverse',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `flex-no-wrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.
     * * Use `flex-wrap` to allow flex items to wrap.
     * * Use `flex-wrap-reverse` to wrap flex items in the reverse direction.
     */
    lg: PropTypes.oneOf([
        '',
        'flex-no-wrap',
        'flex-wrap',
        'flex-wrap-reverse',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `flex-no-wrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.
     * * Use `flex-wrap` to allow flex items to wrap.
     * * Use `flex-wrap-reverse` to wrap flex items in the reverse direction.
     */
    xl: PropTypes.oneOf([
        '',
        'flex-no-wrap',
        'flex-wrap',
        'flex-wrap-reverse',
    ]),
};
