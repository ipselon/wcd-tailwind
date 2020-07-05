import PropTypes from "prop-types";

export interface ObjectFitProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const ObjectFitTypes = {
    /**
     * #### all media
     * * `object-contain` - Resize an element's content to stay contained within its container;
     * * `object-cover` - Resize an element's content to cover its container;
     * * `object-fill` - Stretch an element's content to fit its container;
     * * `object-none` - Display an element's content at its original size ignoring the container size;
     * * `object-scale-down` - Display an element's content at its original size but scale it down to fit its container if necessary;
     */
    default: PropTypes.oneOf([
        '',
        'object-contain',
        'object-cover',
        'object-fill',
        'object-none',
        'object-scale-down',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * `object-contain` - Resize an element's content to stay contained within its container;
     * * `object-cover` - Resize an element's content to cover its container;
     * * `object-fill` - Stretch an element's content to fit its container;
     * * `object-none` - Display an element's content at its original size ignoring the container size;
     * * `object-scale-down` - Display an element's content at its original size but scale it down to fit its container if necessary;
     */
    sm: PropTypes.oneOf([
        '',
        'object-contain',
        'object-cover',
        'object-fill',
        'object-none',
        'object-scale-down',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * `object-contain` - Resize an element's content to stay contained within its container;
     * * `object-cover` - Resize an element's content to cover its container;
     * * `object-fill` - Stretch an element's content to fit its container;
     * * `object-none` - Display an element's content at its original size ignoring the container size;
     * * `object-scale-down` - Display an element's content at its original size but scale it down to fit its container if necessary;
     */
    md: PropTypes.oneOf([
        '',
        'object-contain',
        'object-cover',
        'object-fill',
        'object-none',
        'object-scale-down',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * `object-contain` - Resize an element's content to stay contained within its container;
     * * `object-cover` - Resize an element's content to cover its container;
     * * `object-fill` - Stretch an element's content to fit its container;
     * * `object-none` - Display an element's content at its original size ignoring the container size;
     * * `object-scale-down` - Display an element's content at its original size but scale it down to fit its container if necessary;
     */
    lg: PropTypes.oneOf([
        '',
        'object-contain',
        'object-cover',
        'object-fill',
        'object-none',
        'object-scale-down',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * `object-contain` - Resize an element's content to stay contained within its container;
     * * `object-cover` - Resize an element's content to cover its container;
     * * `object-fill` - Stretch an element's content to fit its container;
     * * `object-none` - Display an element's content at its original size ignoring the container size;
     * * `object-scale-down` - Display an element's content at its original size but scale it down to fit its container if necessary;
     */
    xl: PropTypes.oneOf([
        '',
        'object-contain',
        'object-cover',
        'object-fill',
        'object-none',
        'object-scale-down',
    ]),
};
