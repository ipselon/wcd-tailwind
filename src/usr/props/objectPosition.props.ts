import PropTypes from "prop-types";

export interface ObjectPositionProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const ObjectPositionTypes = {
    /**
     * #### all media
     * Use the `object-{side}` utilities to specify how a replaced element's content should be positioned within its container.
     */
    default: PropTypes.oneOf([
        '',
        'object-bottom',
        'object-center',
        'object-left',
        'object-left-bottom',
        'object-left-top',
        'object-right',
        'object-right-bottom',
        'object-right-top',
        'object-top',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Use the `object-{side}` utilities to specify how a replaced element's content should be positioned within its container.
     */
    sm: PropTypes.oneOf([
        '',
        'object-bottom',
        'object-center',
        'object-left',
        'object-left-bottom',
        'object-left-top',
        'object-right',
        'object-right-bottom',
        'object-right-top',
        'object-top',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use the `object-{side}` utilities to specify how a replaced element's content should be positioned within its container.
     */
    md: PropTypes.oneOf([
        '',
        'object-bottom',
        'object-center',
        'object-left',
        'object-left-bottom',
        'object-left-top',
        'object-right',
        'object-right-bottom',
        'object-right-top',
        'object-top',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use the `object-{side}` utilities to specify how a replaced element's content should be positioned within its container.
     */
    lg: PropTypes.oneOf([
        '',
        'object-bottom',
        'object-center',
        'object-left',
        'object-left-bottom',
        'object-left-top',
        'object-right',
        'object-right-bottom',
        'object-right-top',
        'object-top',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use the `object-{side}` utilities to specify how a replaced element's content should be positioned within its container.
     */
    xl: PropTypes.oneOf([
        '',
        'object-bottom',
        'object-center',
        'object-left',
        'object-left-bottom',
        'object-left-top',
        'object-right',
        'object-right-bottom',
        'object-right-top',
        'object-top',
    ]),
};
