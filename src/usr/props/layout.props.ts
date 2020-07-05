import PropTypes from "prop-types";
import {BoxSizingProps, BoxSizingTypes} from "./boxSizing.props";
import {DisplayProps, DisplayTypes} from "./display.props";
import {FloatProps, FloatTypes} from "./float.props";
import {ClearProps, ClearTypes} from "./clear.props";
import {ObjectFitProps, ObjectFitTypes} from "./objectFit.props";
import {ObjectPositionProps, ObjectPositionTypes} from "./objectPosition.props";
import {OverflowProps, OverflowTypes} from "./overflow.props";
import {PositionProps, PositionTypes} from "./position.props";
import {TopRightBottomLeftProps, TopRightBottomLeftTypes} from "./topRightBottomLeft.props";
import {VisibilityProps, VisibilityTypes} from "./visibility.props";
import {ZIndexProps, ZIndexTypes} from "./zIndex.props";

export interface LayoutProps {
    container: {
        container: boolean;
        mxAuto: boolean;
    },
    boxSizing: BoxSizingProps;
    display: DisplayProps;
    float: FloatProps;
    clear: ClearProps;
    objectFit: ObjectFitProps;
    objectPosition: ObjectPositionProps;
    overflow: OverflowProps;
    position: PositionProps;
    topRightBottomLeft: TopRightBottomLeftProps;
    visibility: VisibilityProps;
    zIndex: ZIndexProps;
}

export const LayoutTypes = {
    /**
     *
     */
    container: PropTypes.shape({
        /**
         * A component for fixing an element's width to the current breakpoint.
         *
         * The .container class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.
         */
        container: PropTypes.bool,
        /**
         * To center a container, use the .mx-auto utility
         */
        mxAuto: PropTypes.bool,
    }),
    /**
     * Utilities for controlling how the browser should calculate an element's total size.
     */
    boxSizing: PropTypes.shape(BoxSizingTypes),
    /**
     * Utilities for controlling the display box type of an element.
     */
    display: PropTypes.shape(DisplayTypes),
    /**
     * Utilities for controlling the wrapping of content around an element.
     */
    float: PropTypes.shape(FloatTypes),
    /**
     * Utilities for controlling the wrapping of content around an element.
     */
    clear: PropTypes.shape(ClearTypes),
    /**
     * Utilities for controlling how a replaced element's content should be resized.
     */
    objectFit: PropTypes.shape(ObjectFitTypes),
    /**
     * Utilities for controlling how a replaced element's content should be positioned within its container.
     */
    objectPosition: PropTypes.shape(ObjectPositionTypes),
    /**
     * Utilities for controlling how an element handles content that is too large for the container.
     */
    overflow: PropTypes.shape(OverflowTypes),
    /**
     * Utilities for controlling how an element is positioned in the DOM.
     */
    position: PropTypes.shape(PositionTypes),
    /**
     * Utilities for controlling the placement of positioned elements.
     */
    topRightBottomLeft: PropTypes.shape(TopRightBottomLeftTypes),
    /**
     * Utilities for controlling the visibility of an element.
     */
    visibility: PropTypes.shape(VisibilityTypes),
    /**
     * Utilities for controlling the stack order of an element.
     */
    zIndex: PropTypes.shape(ZIndexTypes),
};
