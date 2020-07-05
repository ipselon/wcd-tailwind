import PropTypes from "prop-types";
import {FlexDirectionProps, FlexDirectionTypes} from "./flexDirection.props";
import {FlexWrapProps, FlexWrapTypes} from "./flexWrap.props";
import {AlignItemsProps, AlignItemsTypes} from "./alignItems.props";
import {AlignContentProps, AlignContentTypes} from "./alignContent.props";
import {AlignSelfProps, AlignSelfTypes} from "./alignSelf.props";
import {JustifyContentProps, JustifyContentTypes} from "./justifyContent.props";
import {FlexProps, FlexTypes} from "./flex.props";
import {FlexGrowProps, FlexGrowTypes} from "./flexGrow.props";
import {FlexShrinkProps, FlexShrinkTypes} from "./flexShrink.props";
import {OrderProps, OrderTypes} from "./order.props";

export interface FlexboxProps {
    flexDirection: FlexDirectionProps;
    flexWrap: FlexWrapProps;
    alignItems: AlignItemsProps;
    alignContent: AlignContentProps;
    alignSelf: AlignSelfProps;
    justifyContent: JustifyContentProps;
    flex: FlexProps;
    flexGrow: FlexGrowProps;
    flexShrink: FlexShrinkProps;
    order: OrderProps;
}

export const FlexboxTypes = {
    /**
     * Utilities for controlling the direction of flex items.
     */
    flexDirection: PropTypes.shape(FlexDirectionTypes),
    /**
     * Utilities for controlling how flex items wrap.
     */
    flexWrap: PropTypes.shape(FlexWrapTypes),
    /**
     * Utilities for controlling how flex items are positioned along a container's cross axis.
     */
    alignItems: PropTypes.shape(AlignItemsTypes),
    /**
     * Utilities for controlling how lines are positioned in multi-line flex containers.
     */
    alignContent: PropTypes.shape(AlignContentTypes),
    /**
     * Utilities for controlling how an individual flex item is positioned along its container's cross axis.
     */
    alignSelf: PropTypes.shape(AlignSelfTypes),
    /**
     * Utilities for controlling how flex items are positioned along a container's main axis.
     */
    justifyContent: PropTypes.shape(JustifyContentTypes),
    /**
     * Utilities for controlling how flex items both grow and shrink.
     */
    flex: PropTypes.shape(FlexTypes),
    /**
     * Utilities for controlling how flex items grow.
     */
    flexGrow: PropTypes.shape(FlexGrowTypes),
    /**
     * Utilities for controlling how flex items shrink.
     */
    flexShrink: PropTypes.shape(FlexShrinkTypes),
    /**
     * Utilities for controlling the order of flex items.
     */
    order: PropTypes.shape(OrderTypes),
};
