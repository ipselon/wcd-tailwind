import PropTypes from "prop-types";

export interface FlexDirectionProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const FlexDirectionTypes = {
    /**
     * #### all media
     * * Use `flex-row` to position flex items horizontally in the same direction as text.
     * * Use `flex-row-reverse` to position flex items horizontally in the opposite direction.
     * * Use `flex-col` to position flex items vertically.
     * * Use `flex-col-reverse` to position flex items vertically in the opposite direction.
     */
    default: PropTypes.oneOf([
        '',
        'flex-row',
        'flex-row-reverse',
        'flex-col',
        'flex-col-reverse',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `flex-row` to position flex items horizontally in the same direction as text.
     * * Use `flex-row-reverse` to position flex items horizontally in the opposite direction.
     * * Use `flex-col` to position flex items vertically.
     * * Use `flex-col-reverse` to position flex items vertically in the opposite direction.
     */
    sm: PropTypes.oneOf([
        '',
        'flex-row',
        'flex-row-reverse',
        'flex-col',
        'flex-col-reverse',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `flex-row` to position flex items horizontally in the same direction as text.
     * * Use `flex-row-reverse` to position flex items horizontally in the opposite direction.
     * * Use `flex-col` to position flex items vertically.
     * * Use `flex-col-reverse` to position flex items vertically in the opposite direction.
     */
    md: PropTypes.oneOf([
        '',
        'flex-row',
        'flex-row-reverse',
        'flex-col',
        'flex-col-reverse',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `flex-row` to position flex items horizontally in the same direction as text.
     * * Use `flex-row-reverse` to position flex items horizontally in the opposite direction.
     * * Use `flex-col` to position flex items vertically.
     * * Use `flex-col-reverse` to position flex items vertically in the opposite direction.
     */
    lg: PropTypes.oneOf([
        '',
        'flex-row',
        'flex-row-reverse',
        'flex-col',
        'flex-col-reverse',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `flex-row` to position flex items horizontally in the same direction as text.
     * * Use `flex-row-reverse` to position flex items horizontally in the opposite direction.
     * * Use `flex-col` to position flex items vertically.
     * * Use `flex-col-reverse` to position flex items vertically in the opposite direction.
     */
    xl: PropTypes.oneOf([
        '',
        'flex-row',
        'flex-row-reverse',
        'flex-col',
        'flex-col-reverse',
    ]),
};
