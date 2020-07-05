import PropTypes from "prop-types";
import {GridTemplateColumnsProps, GridTemplateColumnsTypes} from "./gridTemplateColumns .props";
import {GridColumnStartProps, GridColumnStartTypes} from "./gridColumnStart.props";
import {GridColumnEndProps, GridColumnEndTypes} from "./gridColumnEnd.props";
import {GridColumnSpanProps, GridColumnSpanTypes} from "./gridColumnSpan.props";
import {GridTemplateRowsProps, GridTemplateRowsTypes} from "./gridTemplateRows.props";
import {GridRowStartProps, GridRowStartTypes} from "./gridRowStart.props";
import {GridRowEndProps, GridRowEndTypes} from "./gridRowEnd.props";
import {GridRowSpanProps, GridRowSpanTypes} from "./gridRowSpan.props";
import {GapProps, GapTypes} from "./gap.props";
import {RowGapProps, RowGapTypes} from "./rowGap.props";
import {ColumnGapProps, ColumnGapTypes} from "./columnGap.props";
import {GridAutoFlowProps, GridAutoFlowTypes} from "./gridAutoFlow.props";

export interface GridProps {
    gridTemplateColumns: GridTemplateColumnsProps;
    gridColumnStart: GridColumnStartProps;
    gridColumnEnd: GridColumnEndProps;
    gridColumnSpan: GridColumnSpanProps;
    gridTemplateRows: GridTemplateRowsProps;
    gridRowStart: GridRowStartProps;
    gridRowEnd: GridRowEndProps;
    gridRowSpan: GridRowSpanProps;
    gap: GapProps;
    rowGap: RowGapProps;
    columnGap: ColumnGapProps;
    gridAutoFlow: GridAutoFlowProps;
}

export const GridTypes = {
    /**
     * Utilities for specifying the columns in a grid layout.
     */
    gridTemplateColumns: PropTypes.shape(GridTemplateColumnsTypes),
    /**
     * Utilities for controlling how elements are sized and placed across grid columns.
     */
    gridColumnStart: PropTypes.shape(GridColumnStartTypes),
    /**
     * Utilities for controlling how elements are sized and placed across grid columns.
     */
    gridColumnEnd: PropTypes.shape(GridColumnEndTypes),
    /**
     * Utilities for controlling how elements are sized and placed across grid columns.
     */
    gridColumnSpan: PropTypes.shape(GridColumnSpanTypes),
    /**
     * Utilities for specifying the rows in a grid layout.
     */
    gridTemplateRows: PropTypes.shape(GridTemplateRowsTypes),
    /**
     * Utilities for controlling how elements are sized and placed across grid rows.
     */
    gridRowStart: PropTypes.shape(GridRowStartTypes),
    /**
     * Utilities for controlling how elements are sized and placed across grid rows.
     */
    gridRowEnd: PropTypes.shape(GridRowEndTypes),
    /**
     * Utilities for controlling how elements are sized and placed across grid rows.
     */
    gridRowSpan: PropTypes.shape(GridRowSpanTypes),
    /**
     * Utilities for controlling gutters between grid rows and columns.
     */
    gap: PropTypes.shape(GapTypes),
    /**
     * Utilities for controlling gutters between grid rows and columns.
     */
    rowGap: PropTypes.shape(RowGapTypes),
    /**
     * Utilities for controlling gutters between grid rows and columns.
     */
    columnGap: PropTypes.shape(ColumnGapTypes),
    /**
     * Utilities for controlling how elements in a grid are auto-placed.
     */
    gridAutoFlow: PropTypes.shape(GridAutoFlowTypes),
};
