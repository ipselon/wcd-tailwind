import get from 'lodash/get';
import getClassName from './getClassName';
import getClassNameByFlag from './getClassNameByFlag';

export default function (props) {

  let className = '';
  /**
   * Layout
   */

  // Container
  className += get(props, 'layout.container.container', false) ? ' container' : '';
  className += get(props, 'layout.container.mxAuto', false) ? ' mx-auto' : '';
  // Box Sizing
  className += getClassName(props, 'layout.boxSizing.default', '');
  className += getClassName(props, 'layout.boxSizing.sm', '', 'sm:');
  className += getClassName(props, 'layout.boxSizing.md', '', 'md:');
  className += getClassName(props, 'layout.boxSizing.lg', '', 'lg:');
  className += getClassName(props, 'layout.boxSizing.xl', '', 'xl:');
  // Display
  className += getClassName(props, 'layout.display.default', '');
  className += getClassName(props, 'layout.display.sm', '', 'sm:');
  className += getClassName(props, 'layout.display.md', '', 'md:');
  className += getClassName(props, 'layout.display.lg', '', 'lg:');
  className += getClassName(props, 'layout.display.xl', '', 'xl:');
  // Float
  className += getClassName(props, 'layout.float.default', '');
  className += getClassName(props, 'layout.float.sm', '', 'sm:');
  className += getClassName(props, 'layout.float.md', '', 'md:');
  className += getClassName(props, 'layout.float.lg', '', 'lg:');
  className += getClassName(props, 'layout.float.xl', '', 'xl:');
  // Clear
  className += getClassName(props, 'layout.float.default', '');
  className += getClassName(props, 'layout.float.sm', '', 'sm:');
  className += getClassName(props, 'layout.float.md', '', 'md:');
  className += getClassName(props, 'layout.float.lg', '', 'lg:');
  className += getClassName(props, 'layout.float.xl', '', 'xl:');
  // ObjectFit
  className += getClassName(props, 'layout.objectFit.default', '');
  className += getClassName(props, 'layout.objectFit.sm', '', 'sm:');
  className += getClassName(props, 'layout.objectFit.md', '', 'md:');
  className += getClassName(props, 'layout.objectFit.lg', '', 'lg:');
  className += getClassName(props, 'layout.objectFit.xl', '', 'xl:');
  // ObjectPosition
  className += getClassName(props, 'layout.objectPosition.default', '');
  className += getClassName(props, 'layout.objectPosition.sm', '', 'sm:');
  className += getClassName(props, 'layout.objectPosition.md', '', 'md:');
  className += getClassName(props, 'layout.objectPosition.lg', '', 'lg:');
  className += getClassName(props, 'layout.objectPosition.xl', '', 'xl:');
  // Overflow
  className += getClassName(props, 'layout.overflow.default', '');
  className += getClassName(props, 'layout.overflow.sm', '', 'sm:');
  className += getClassName(props, 'layout.overflow.md', '', 'md:');
  className += getClassName(props, 'layout.overflow.lg', '', 'lg:');
  className += getClassName(props, 'layout.overflow.xl', '', 'xl:');
  // Position
  className += getClassName(props, 'layout.position.default', '');
  className += getClassName(props, 'layout.position.sm', '', 'sm:');
  className += getClassName(props, 'layout.position.md', '', 'md:');
  className += getClassName(props, 'layout.position.lg', '', 'lg:');
  className += getClassName(props, 'layout.position.xl', '', 'xl:');
  // TopRightBottomLeft
  className += getClassName(props, 'layout.topRightBottomLeft.default', '');
  className += getClassName(props, 'layout.topRightBottomLeft.sm', '', 'sm:');
  className += getClassName(props, 'layout.topRightBottomLeft.md', '', 'md:');
  className += getClassName(props, 'layout.topRightBottomLeft.lg', '', 'lg:');
  className += getClassName(props, 'layout.topRightBottomLeft.xl', '', 'xl:');
  // Visibility
  className += getClassName(props, 'layout.visibility.default', '');
  className += getClassName(props, 'layout.visibility.sm', '', 'sm:');
  className += getClassName(props, 'layout.visibility.md', '', 'md:');
  className += getClassName(props, 'layout.visibility.lg', '', 'lg:');
  className += getClassName(props, 'layout.visibility.xl', '', 'xl:');

  /**
   * Flexbox
   */

  // FlexDirection
  className += getClassName(props, 'flexbox.flexDirection.default', '');
  className += getClassName(props, 'flexbox.flexDirection.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.flexDirection.md', '', 'md:');
  className += getClassName(props, 'flexbox.flexDirection.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.flexDirection.xl', '', 'xl:');
  // FlexWrap
  className += getClassName(props, 'flexbox.flexWrap.default', '');
  className += getClassName(props, 'flexbox.flexWrap.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.flexWrap.md', '', 'md:');
  className += getClassName(props, 'flexbox.flexWrap.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.flexWrap.xl', '', 'xl:');
  // AlignItems
  className += getClassName(props, 'flexbox.alignItems.default', '');
  className += getClassName(props, 'flexbox.alignItems.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.alignItems.md', '', 'md:');
  className += getClassName(props, 'flexbox.alignItems.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.alignItems.xl', '', 'xl:');
  // AlignContent
  className += getClassName(props, 'flexbox.alignContent.default', '');
  className += getClassName(props, 'flexbox.alignContent.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.alignContent.md', '', 'md:');
  className += getClassName(props, 'flexbox.alignContent.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.alignContent.xl', '', 'xl:');
  // AlignSelf
  className += getClassName(props, 'flexbox.alignSelf.default', '');
  className += getClassName(props, 'flexbox.alignSelf.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.alignSelf.md', '', 'md:');
  className += getClassName(props, 'flexbox.alignSelf.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.alignSelf.xl', '', 'xl:');
  // JustifyContent
  className += getClassName(props, 'flexbox.justifyContent.default', '');
  className += getClassName(props, 'flexbox.justifyContent.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.justifyContent.md', '', 'md:');
  className += getClassName(props, 'flexbox.justifyContent.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.justifyContent.xl', '', 'xl:');
  // Flex
  className += getClassName(props, 'flexbox.flex.default', '');
  className += getClassName(props, 'flexbox.flex.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.flex.md', '', 'md:');
  className += getClassName(props, 'flexbox.flex.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.flex.xl', '', 'xl:');
  // FlexGrow
  className += getClassName(props, 'flexbox.flexGrow.default', '');
  className += getClassName(props, 'flexbox.flexGrow.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.flexGrow.md', '', 'md:');
  className += getClassName(props, 'flexbox.flexGrow.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.flexGrow.xl', '', 'xl:');
  // FlexShrink
  className += getClassName(props, 'flexbox.flexShrink.default', '');
  className += getClassName(props, 'flexbox.flexShrink.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.flexShrink.md', '', 'md:');
  className += getClassName(props, 'flexbox.flexShrink.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.flexShrink.xl', '', 'xl:');
  // Order
  className += getClassName(props, 'flexbox.order.default', '');
  className += getClassName(props, 'flexbox.order.sm', '', 'sm:');
  className += getClassName(props, 'flexbox.order.md', '', 'md:');
  className += getClassName(props, 'flexbox.order.lg', '', 'lg:');
  className += getClassName(props, 'flexbox.order.xl', '', 'xl:');

  /**
   * Grid
   */

  // GridTemplateColumns
  className += getClassName(props, 'grid.gridTemplateColumns.default', '');
  className += getClassName(props, 'grid.gridTemplateColumns.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridTemplateColumns.md', '', 'md:');
  className += getClassName(props, 'grid.gridTemplateColumns.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridTemplateColumns.xl', '', 'xl:');
  // GridColumnStart
  className += getClassName(props, 'grid.gridColumnStart.default', '');
  className += getClassName(props, 'grid.gridColumnStart.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridColumnStart.md', '', 'md:');
  className += getClassName(props, 'grid.gridColumnStart.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridColumnStart.xl', '', 'xl:');
  // GridColumnEnd
  className += getClassName(props, 'grid.gridColumnEnd.default', '');
  className += getClassName(props, 'grid.gridColumnEnd.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridColumnEnd.md', '', 'md:');
  className += getClassName(props, 'grid.gridColumnEnd.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridColumnEnd.xl', '', 'xl:');
  // GridColumnSpan
  className += getClassName(props, 'grid.gridColumnSpan.default', '');
  className += getClassName(props, 'grid.gridColumnSpan.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridColumnSpan.md', '', 'md:');
  className += getClassName(props, 'grid.gridColumnSpan.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridColumnSpan.xl', '', 'xl:');
  // GridTemplateRows
  className += getClassName(props, 'grid.gridTemplateRows.default', '');
  className += getClassName(props, 'grid.gridTemplateRows.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridTemplateRows.md', '', 'md:');
  className += getClassName(props, 'grid.gridTemplateRows.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridTemplateRows.xl', '', 'xl:');
  // GridRowStart
  className += getClassName(props, 'grid.gridRowStart.default', '');
  className += getClassName(props, 'grid.gridRowStart.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridRowStart.md', '', 'md:');
  className += getClassName(props, 'grid.gridRowStart.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridRowStart.xl', '', 'xl:');
  // GridRowEnd
  className += getClassName(props, 'grid.gridRowEnd.default', '');
  className += getClassName(props, 'grid.gridRowEnd.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridRowEnd.md', '', 'md:');
  className += getClassName(props, 'grid.gridRowEnd.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridRowEnd.xl', '', 'xl:');
  // GridRowSpan
  className += getClassName(props, 'grid.gridRowSpan.default', '');
  className += getClassName(props, 'grid.gridRowSpan.sm', '', 'sm:');
  className += getClassName(props, 'grid.gridRowSpan.md', '', 'md:');
  className += getClassName(props, 'grid.gridRowSpan.lg', '', 'lg:');
  className += getClassName(props, 'grid.gridRowSpan.xl', '', 'xl:');
  // Gap
  className += getClassName(props, 'grid.gap.default', '');
  className += getClassName(props, 'grid.gap.sm', '', 'sm:');
  className += getClassName(props, 'grid.gap.md', '', 'md:');
  className += getClassName(props, 'grid.gap.lg', '', 'lg:');
  className += getClassName(props, 'grid.gap.xl', '', 'xl:');
  // RowGap
  className += getClassName(props, 'grid.rowGap.default', '');
  className += getClassName(props, 'grid.rowGap.sm', '', 'sm:');
  className += getClassName(props, 'grid.rowGap.md', '', 'md:');
  className += getClassName(props, 'grid.rowGap.lg', '', 'lg:');
  className += getClassName(props, 'grid.rowGap.xl', '', 'xl:');
  // ColumnGap
  className += getClassName(props, 'grid.columnGap.default', '');
  className += getClassName(props, 'grid.columnGap.sm', '', 'sm:');
  className += getClassName(props, 'grid.columnGap.md', '', 'md:');
  className += getClassName(props, 'grid.columnGap.lg', '', 'lg:');
  className += getClassName(props, 'grid.columnGap.xl', '', 'xl:');
  // GridAutoFlow
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.default.gridFlowRow', 'grid-flow-row');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.default.gridFlowCol', 'grid-flow-row');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.default.gridFlowRowDense', 'grid-flow-row');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.default.gridFlowColDense', 'grid-flow-row');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.sm.gridFlowRow', 'grid-flow-row', 'sm:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.sm.gridFlowCol', 'grid-flow-row','sm:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.sm.gridFlowRowDense', 'grid-flow-row','sm:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.sm.gridFlowColDense', 'grid-flow-row', 'sm:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.md.gridFlowRow', 'grid-flow-row', 'md:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.md.gridFlowCol', 'grid-flow-row','md:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.md.gridFlowRowDense', 'grid-flow-row','md:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.md.gridFlowColDense', 'grid-flow-row', 'md:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.lg.gridFlowRow', 'grid-flow-row', 'lg:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.lg.gridFlowCol', 'grid-flow-row','lg:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.lg.gridFlowRowDense', 'grid-flow-row','lg:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.lg.gridFlowColDense', 'grid-flow-row', 'lg:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.xl.gridFlowRow', 'grid-flow-row', 'xl:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.xl.gridFlowCol', 'grid-flow-row','xl:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.xl.gridFlowRowDense', 'grid-flow-row','xl:');
  className += getClassNameByFlag(props, 'grid.gridAutoFlow.xl.gridFlowColDense', 'grid-flow-row', 'xl:');

  /**
   * Spacing
   */

  // Padding
  className += getClassName(props, 'spacing.padding.default', '');
  className += getClassName(props, 'spacing.padding.sm', '', 'sm:');
  className += getClassName(props, 'spacing.padding.md', '', 'md:');
  className += getClassName(props, 'spacing.padding.lg', '', 'lg:');
  className += getClassName(props, 'spacing.padding.xl', '', 'xl:');
  // PaddingTop
  className += getClassName(props, 'spacing.paddingTop.default', '');
  className += getClassName(props, 'spacing.paddingTop.sm', '', 'sm:');
  className += getClassName(props, 'spacing.paddingTop.md', '', 'md:');
  className += getClassName(props, 'spacing.paddingTop.lg', '', 'lg:');
  className += getClassName(props, 'spacing.paddingTop.xl', '', 'xl:');
  // PaddingLeft
  className += getClassName(props, 'spacing.paddingLeft.default', '');
  className += getClassName(props, 'spacing.paddingLeft.sm', '', 'sm:');
  className += getClassName(props, 'spacing.paddingLeft.md', '', 'md:');
  className += getClassName(props, 'spacing.paddingLeft.lg', '', 'lg:');
  className += getClassName(props, 'spacing.paddingLeft.xl', '', 'xl:');
  // PaddingRight
  className += getClassName(props, 'spacing.paddingRight.default', '');
  className += getClassName(props, 'spacing.paddingRight.sm', '', 'sm:');
  className += getClassName(props, 'spacing.paddingRight.md', '', 'md:');
  className += getClassName(props, 'spacing.paddingRight.lg', '', 'lg:');
  className += getClassName(props, 'spacing.paddingRight.xl', '', 'xl:');
  // PaddingBottom
  className += getClassName(props, 'spacing.paddingBottom.default', '');
  className += getClassName(props, 'spacing.paddingBottom.sm', '', 'sm:');
  className += getClassName(props, 'spacing.paddingBottom.md', '', 'md:');
  className += getClassName(props, 'spacing.paddingBottom.lg', '', 'lg:');
  className += getClassName(props, 'spacing.paddingBottom.xl', '', 'xl:');
  // PaddingVertical
  className += getClassName(props, 'spacing.paddingVertical.default', '');
  className += getClassName(props, 'spacing.paddingVertical.sm', '', 'sm:');
  className += getClassName(props, 'spacing.paddingVertical.md', '', 'md:');
  className += getClassName(props, 'spacing.paddingVertical.lg', '', 'lg:');
  className += getClassName(props, 'spacing.paddingVertical.xl', '', 'xl:');
  // PaddingHorizontal
  className += getClassName(props, 'spacing.paddingHorizontal.default', '');
  className += getClassName(props, 'spacing.paddingHorizontal.sm', '', 'sm:');
  className += getClassName(props, 'spacing.paddingHorizontal.md', '', 'md:');
  className += getClassName(props, 'spacing.paddingHorizontal.lg', '', 'lg:');
  className += getClassName(props, 'spacing.paddingHorizontal.xl', '', 'xl:');
  // Margin
  className += getClassName(props, 'spacing.margin.default', '');
  className += getClassName(props, 'spacing.margin.sm', '', 'sm:');
  className += getClassName(props, 'spacing.margin.md', '', 'md:');
  className += getClassName(props, 'spacing.margin.lg', '', 'lg:');
  className += getClassName(props, 'spacing.margin.xl', '', 'xl:');
  // MarginTop
  className += getClassName(props, 'spacing.marginTop.default', '');
  className += getClassName(props, 'spacing.marginTop.sm', '', 'sm:');
  className += getClassName(props, 'spacing.marginTop.md', '', 'md:');
  className += getClassName(props, 'spacing.marginTop.lg', '', 'lg:');
  className += getClassName(props, 'spacing.marginTop.xl', '', 'xl:');
  // MarginLeft
  className += getClassName(props, 'spacing.marginLeft.default', '');
  className += getClassName(props, 'spacing.marginLeft.sm', '', 'sm:');
  className += getClassName(props, 'spacing.marginLeft.md', '', 'md:');
  className += getClassName(props, 'spacing.marginLeft.lg', '', 'lg:');
  className += getClassName(props, 'spacing.marginLeft.xl', '', 'xl:');
  // MarginRight
  className += getClassName(props, 'spacing.marginRight.default', '');
  className += getClassName(props, 'spacing.marginRight.sm', '', 'sm:');
  className += getClassName(props, 'spacing.marginRight.md', '', 'md:');
  className += getClassName(props, 'spacing.marginRight.lg', '', 'lg:');
  className += getClassName(props, 'spacing.marginRight.xl', '', 'xl:');
  // MarginBottom
  className += getClassName(props, 'spacing.marginBottom.default', '');
  className += getClassName(props, 'spacing.marginBottom.sm', '', 'sm:');
  className += getClassName(props, 'spacing.marginBottom.md', '', 'md:');
  className += getClassName(props, 'spacing.marginBottom.lg', '', 'lg:');
  className += getClassName(props, 'spacing.marginBottom.xl', '', 'xl:');
  // MarginVertical
  className += getClassName(props, 'spacing.marginVertical.default', '');
  className += getClassName(props, 'spacing.marginVertical.sm', '', 'sm:');
  className += getClassName(props, 'spacing.marginVertical.md', '', 'md:');
  className += getClassName(props, 'spacing.marginVertical.lg', '', 'lg:');
  className += getClassName(props, 'spacing.marginVertical.xl', '', 'xl:');
  // MarginHorizontal
  className += getClassName(props, 'spacing.marginHorizontal.default', '');
  className += getClassName(props, 'spacing.marginHorizontal.sm', '', 'sm:');
  className += getClassName(props, 'spacing.marginHorizontal.md', '', 'md:');
  className += getClassName(props, 'spacing.marginHorizontal.lg', '', 'lg:');
  className += getClassName(props, 'spacing.marginHorizontal.xl', '', 'xl:');
  // SpaceBetweenVertical
  className += getClassName(props, 'spacing.spaceBetweenVertical.default', '');
  className += getClassName(props, 'spacing.spaceBetweenVertical.sm', '', 'sm:');
  className += getClassName(props, 'spacing.spaceBetweenVertical.md', '', 'md:');
  className += getClassName(props, 'spacing.spaceBetweenVertical.lg', '', 'lg:');
  className += getClassName(props, 'spacing.spaceBetweenVertical.xl', '', 'xl:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenVertical.defaultReverse', 'space-y-reverse');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenVertical.smReverse', 'space-y-reverse', 'sm:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenVertical.mdReverse', 'space-y-reverse', 'md:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenVertical.lgReverse', 'space-y-reverse', 'lg:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenVertical.xlReverse', 'space-y-reverse', 'xl:');
  // SpaceBetweenHorizontal
  className += getClassName(props, 'spacing.spaceBetweenHorizontal.default', '');
  className += getClassName(props, 'spacing.spaceBetweenHorizontal.sm', '', 'sm:');
  className += getClassName(props, 'spacing.spaceBetweenHorizontal.md', '', 'md:');
  className += getClassName(props, 'spacing.spaceBetweenHorizontal.lg', '', 'lg:');
  className += getClassName(props, 'spacing.spaceBetweenHorizontal.xl', '', 'xl:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenHorizontal.defaultReverse', 'space-x-reverse');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenHorizontal.smReverse', 'space-x-reverse', 'sm:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenHorizontal.mdReverse', 'space-x-reverse', 'md:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenHorizontal.lgReverse', 'space-x-reverse', 'lg:');
  className += getClassNameByFlag(props, 'spacing.spaceBetweenHorizontal.xlReverse', 'space-x-reverse', 'xl:');

  return className;

}