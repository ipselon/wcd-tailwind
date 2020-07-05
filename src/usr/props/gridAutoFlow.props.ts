import PropTypes from "prop-types";

interface GridAutoFlowVariantProps {
    gridFlowRow?: boolean;
    gridFlowCol?: boolean;
    gridFlowRowDense?: boolean;
    gridFlowColDense?: boolean;
}

export interface GridAutoFlowProps {
    default: GridAutoFlowVariantProps;
    sm: GridAutoFlowVariantProps;
    md: GridAutoFlowVariantProps;
    lg: GridAutoFlowVariantProps;
    xl: GridAutoFlowVariantProps;
}

export const GridAutoFlowVariantTypes = {
    /**
     * `grid-flow-row`
     */
    gridFlowRow: PropTypes.bool,
    /**
     * `grid-flow-col`
     */
    gridFlowCol: PropTypes.bool,
    /**
     * `grid-flow-row-dense`
     */
    gridFlowRowDense: PropTypes.bool,
    /**
     * `grid-flow-col-dense`
     */
    gridFlowColDense: PropTypes.bool,
};

export const GridAutoFlowTypes = {
    /**
     * #### all media
     * Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.
     */
    default: PropTypes.shape(GridAutoFlowVariantTypes),
    /**
     * #### @media (min-width: 640px)
     * Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.
     */
    sm: PropTypes.shape(GridAutoFlowVariantTypes),
    /**
     * #### @media (min-width: 768px)
     * Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.
     */
    md: PropTypes.shape(GridAutoFlowVariantTypes),
    /**
     * #### @media (min-width: 1024px)
     * Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.
     */
    lg: PropTypes.shape(GridAutoFlowVariantTypes),
    /**
     * #### @media (min-width: 1280px)
     * Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.
     */
    xl: PropTypes.shape(GridAutoFlowVariantTypes),
};
