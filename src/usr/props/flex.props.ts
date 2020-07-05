import PropTypes from "prop-types";

export interface FlexProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const FlexTypes = {
    /**
     * #### all media
     * * Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.
     * * Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.
     * * Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.
     * * Use `flex-none` to prevent a flex item from growing or shrinking.
     */
    default: PropTypes.oneOf([
        '',
        'flex-initial',
        'flex-1',
        'flex-auto',
        'flex-none',
    ]),
    /**
     *  #### @media (min-width: 640px)
     * * Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.
     * * Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.
     * * Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.
     * * Use `flex-none` to prevent a flex item from growing or shrinking.
     */
    sm: PropTypes.oneOf([
        '',
        'flex-initial',
        'flex-1',
        'flex-auto',
        'flex-none',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.
     * * Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.
     * * Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.
     * * Use `flex-none` to prevent a flex item from growing or shrinking.
     */
    md: PropTypes.oneOf([
        '',
        'flex-initial',
        'flex-1',
        'flex-auto',
        'flex-none',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.
     * * Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.
     * * Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.
     * * Use `flex-none` to prevent a flex item from growing or shrinking.
     */
    lg: PropTypes.oneOf([
        '',
        'flex-initial',
        'flex-1',
        'flex-auto',
        'flex-none',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.
     * * Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.
     * * Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.
     * * Use `flex-none` to prevent a flex item from growing or shrinking.
     */
    xl: PropTypes.oneOf([
        '',
        'flex-initial',
        'flex-1',
        'flex-auto',
        'flex-none',
    ]),
};
