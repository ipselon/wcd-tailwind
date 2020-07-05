import PropTypes from "prop-types";
import {PaddingProps, PaddingTypes} from "./padding.props";
import {PaddingTopProps, PaddingTopTypes} from "./paddingTop.props";
import {PaddingLeftProps, PaddingLeftTypes} from "./paddingLeft.props";
import {PaddingRightProps, PaddingRightTypes} from "./paddingRight.props";
import {PaddingBottomProps, PaddingBottomTypes} from "./paddingBottom.props";
import {PaddingVerticalProps, PaddingVerticalTypes} from "./paddingVertical.props";
import {PaddingHorizontalProps, PaddingHorizontalTypes} from "./paddingHorizontal.props";
import {MarginProps, MarginTypes} from "./margin.props";
import {MarginTopProps, MarginTopTypes} from "./marginTop.props";
import {MarginBottomProps, MarginBottomTypes} from "./marginBottom.props";
import {MarginLeftProps, MarginLeftTypes} from "./marginLeft.props";
import {MarginRightProps, MarginRightTypes} from "./marginRight.props";
import {MarginHorizontalProps, MarginHorizontalTypes} from "./marginHorizontal.props";
import {MarginVerticalProps, MarginVerticalTypes} from "./marginVertical.props";
import {SpaceBetweenVerticalProps, SpaceBetweenVerticalTypes} from "./spaceBetweenVertical.props";
import {SpaceBetweenHorizontalProps, SpaceBetweenHorizontalTypes} from "./spaceBetweenHorizontal.props";

export interface SpacingProps {
    padding: PaddingProps;
    paddingTop: PaddingTopProps;
    paddingLeft: PaddingLeftProps;
    paddingRight: PaddingRightProps;
    paddingBottom: PaddingBottomProps;
    paddingVertical: PaddingVerticalProps;
    paddingHorizontal: PaddingHorizontalProps;
    margin: MarginProps;
    marginTop: MarginTopProps;
    marginBottom: MarginBottomProps;
    marginLeft: MarginLeftProps;
    marginRight: MarginRightProps;
    marginHorizontal: MarginHorizontalProps;
    marginVertical: MarginVerticalProps;
    spaceBetweenVertical: SpaceBetweenVerticalProps;
    spaceBetweenHorizontal: SpaceBetweenHorizontalProps;
}

export const SpacingTypes = {
    /**
     * Utilities for controlling an element's padding.
     */
    padding: PropTypes.shape(PaddingTypes),
    /**
     * Utilities for controlling an element's padding.
     */
    paddingTop: PropTypes.shape(PaddingTopTypes),
    /**
     * Utilities for controlling an element's padding.
     */
    paddingLeft: PropTypes.shape(PaddingLeftTypes),
    /**
     * Utilities for controlling an element's padding.
     */
    paddingRight: PropTypes.shape(PaddingRightTypes),
    /**
     * Utilities for controlling an element's padding.
     */
    paddingBottom: PropTypes.shape(PaddingBottomTypes),
    /**
     * Utilities for controlling an element's padding.
     */
    paddingVertical: PropTypes.shape(PaddingVerticalTypes),
    /**
     * Utilities for controlling an element's padding.
     */
    paddingHorizontal: PropTypes.shape(PaddingHorizontalTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    margin: PropTypes.shape(MarginTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    marginTop: PropTypes.shape(MarginTopTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    marginLeft: PropTypes.shape(MarginLeftTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    marginRight: PropTypes.shape(MarginRightTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    marginBottom: PropTypes.shape(MarginBottomTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    marginVertical: PropTypes.shape(MarginVerticalTypes),
    /**
     * Utilities for controlling an element's margin.
     */
    marginHorizontal: PropTypes.shape(MarginHorizontalTypes),
    /**
     * Utilities for controlling the space between child elements.
     */
    spaceBetweenVertical: PropTypes.shape(SpaceBetweenVerticalTypes),
    /**
     * Utilities for controlling the space between child elements.
     */
    spaceBetweenHorizontal: PropTypes.shape(SpaceBetweenHorizontalTypes),
};
