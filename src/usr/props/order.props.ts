import PropTypes from "prop-types";

export interface OrderProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const OrderTypes = {
    /**
     * #### all media
     * Use `order-{order}` to render flex items in a different order than they appear in the DOM.
     */
    default: PropTypes.oneOf([
        '',
        'order-first',
        'order-last',
        'order-none',
        'order-1',
        'order-2',
        'order-3',
        'order-4',
        'order-5',
        'order-6',
        'order-7',
        'order-8',
        'order-9',
        'order-10',
        'order-11',
        'order-12',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * Use `order-{order}` to render flex items in a different order than they appear in the DOM.
     */
    sm: PropTypes.oneOf([
        '',
        'order-first',
        'order-last',
        'order-none',
        'order-1',
        'order-2',
        'order-3',
        'order-4',
        'order-5',
        'order-6',
        'order-7',
        'order-8',
        'order-9',
        'order-10',
        'order-11',
        'order-12',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Use `order-{order}` to render flex items in a different order than they appear in the DOM.
     */
    md: PropTypes.oneOf([
        '',
        'order-first',
        'order-last',
        'order-none',
        'order-1',
        'order-2',
        'order-3',
        'order-4',
        'order-5',
        'order-6',
        'order-7',
        'order-8',
        'order-9',
        'order-10',
        'order-11',
        'order-12',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Use `order-{order}` to render flex items in a different order than they appear in the DOM.
     */
    lg: PropTypes.oneOf([
        '',
        'order-first',
        'order-last',
        'order-none',
        'order-1',
        'order-2',
        'order-3',
        'order-4',
        'order-5',
        'order-6',
        'order-7',
        'order-8',
        'order-9',
        'order-10',
        'order-11',
        'order-12',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Use `order-{order}` to render flex items in a different order than they appear in the DOM.
     */
    xl: PropTypes.oneOf([
        '',
        'order-first',
        'order-last',
        'order-none',
        'order-1',
        'order-2',
        'order-3',
        'order-4',
        'order-5',
        'order-6',
        'order-7',
        'order-8',
        'order-9',
        'order-10',
        'order-11',
        'order-12',
    ]),
};
