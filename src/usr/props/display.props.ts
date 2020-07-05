import PropTypes from "prop-types";

export interface DisplayProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const DisplayTypes = {
    /**
     * #### all media
     * Add description here
     */
    default: PropTypes.oneOf([
        '',
        'hidden',
        'block',
        'flow-root',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
    ]),
    /**
     * #### @media (min-width: 640px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 640px)
     */
    sm: PropTypes.oneOf([
        '',
        'hidden',
        'block',
        'flow-root',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
    ]),
    /**
     * #### @media (min-width: 768px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 768px)
     */
    md: PropTypes.oneOf([
        '',
        'hidden',
        'block',
        'flow-root',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1024px)
     */
    lg: PropTypes.oneOf([
        '',
        'hidden',
        'block',
        'flow-root',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * Control the box-sizing at a specific breakpoint: @media (min-width: 1280px)
     */
    xl: PropTypes.oneOf([
        '',
        'hidden',
        'block',
        'flow-root',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
    ]),
};
