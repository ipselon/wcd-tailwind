import get from 'lodash/get';
import getClassNameFromShaped from './getClassNameFromShaped';

export default function (props) {

  let className = '';
  /**
   * Layout
   */

  console.time('Construct tailwind classes');

  // Container
  className += get(props, 'layout.container.container', false) ? ' container' : '';
  className += get(props, 'layout.container.mxAuto', false) ? ' mx-auto' : '';
  // Box Sizing
  className += getClassNameFromShaped(props, 'layout.boxSizing');
  // Display
  className += getClassNameFromShaped(props, 'layout.display');
  // Float
  className += getClassNameFromShaped(props, 'layout.float');
  // Clear
  className += getClassNameFromShaped(props, 'layout.float');
  // ObjectFit
  className += getClassNameFromShaped(props, 'layout.objectFit');
  // ObjectPosition
  className += getClassNameFromShaped(props, 'layout.objectPosition');
  // Overflow
  className += getClassNameFromShaped(props, 'layout.overflow');
  // Position
  className += getClassNameFromShaped(props, 'layout.position');
  // TopRightBottomLeft
  className += getClassNameFromShaped(props, 'layout.topRightBottomLeft');
  // Visibility
  className += getClassNameFromShaped(props, 'layout.visibility');

  /**
   * Flexbox
   */

  // FlexDirection
  className += getClassNameFromShaped(props, 'flexbox.flexDirection');
  // FlexWrap
  className += getClassNameFromShaped(props, 'flexbox.flexWrap');
  // AlignItems
  className += getClassNameFromShaped(props, 'flexbox.alignItems');
  // AlignContent
  className += getClassNameFromShaped(props, 'flexbox.alignContent');
  // AlignSelf
  className += getClassNameFromShaped(props, 'flexbox.alignSelf');
  // JustifyContent
  className += getClassNameFromShaped(props, 'flexbox.justifyContent');
  // Flex
  className += getClassNameFromShaped(props, 'flexbox.flex');
  // FlexGrow
  className += getClassNameFromShaped(props, 'flexbox.flexGrow');
  // FlexShrink
  className += getClassNameFromShaped(props, 'flexbox.flexShrink');
  // Order
  className += getClassNameFromShaped(props, 'flexbox.order');

  /**
   * Grid
   */

  // GridTemplateColumns
  className += getClassNameFromShaped(props, 'grid.gridTemplateColumns');
  // GridColumnStart
  className += getClassNameFromShaped(props, 'grid.gridColumnStart');
  // GridColumnEnd
  className += getClassNameFromShaped(props, 'grid.gridColumnEnd');
  // GridColumnSpan
  className += getClassNameFromShaped(props, 'grid.gridColumnSpan');
  // GridTemplateRows
  className += getClassNameFromShaped(props, 'grid.gridTemplateRows');
  // GridRowStart
  className += getClassNameFromShaped(props, 'grid.gridRowStart');
  // GridRowEnd
  className += getClassNameFromShaped(props, 'grid.gridRowEnd');
  // GridRowSpan
  className += getClassNameFromShaped(props, 'grid.gridRowSpan');
  // Gap
  className += getClassNameFromShaped(props, 'grid.gap');
  // RowGap
  className += getClassNameFromShaped(props, 'grid.rowGap');
  // ColumnGap
  className += getClassNameFromShaped(props, 'grid.columnGap');
  // GridAutoFlow
  className += getClassNameFromShaped(props, 'grid.gridAutoFlow');

  /**
   * Spacing
   */

  // Padding
  className += getClassNameFromShaped(props, 'spacing.padding');
  // PaddingTop
  className += getClassNameFromShaped(props, 'spacing.paddingTop');
  // PaddingLeft
  className += getClassNameFromShaped(props, 'spacing.paddingLeft');
  // PaddingRight
  className += getClassNameFromShaped(props, 'spacing.paddingRight');
  // PaddingBottom
  className += getClassNameFromShaped(props, 'spacing.paddingBottom');
  // PaddingVertical
  className += getClassNameFromShaped(props, 'spacing.paddingVertical');
  // PaddingHorizontal
  className += getClassNameFromShaped(props, 'spacing.paddingHorizontal');
  // Margin
  className += getClassNameFromShaped(props, 'spacing.margin');
  // MarginTop
  className += getClassNameFromShaped(props, 'spacing.marginTop');
  // MarginLeft
  className += getClassNameFromShaped(props, 'spacing.marginLeft');
  // MarginRight
  className += getClassNameFromShaped(props, 'spacing.marginRight');
  // MarginBottom
  className += getClassNameFromShaped(props, 'spacing.marginBottom');
  // MarginVertical
  className += getClassNameFromShaped(props, 'spacing.marginVertical');
  // MarginHorizontal
  className += getClassNameFromShaped(props, 'spacing.marginHorizontal');
  // SpaceBetweenVertical
  className += getClassNameFromShaped(props, 'spacing.spaceBetweenVertical');
  // SpaceBetweenHorizontal
  className += getClassNameFromShaped(props, 'spacing.spaceBetweenHorizontal');

  /**
   * Sizing
   */

  // Width
  className += getClassNameFromShaped(props, 'sizing.width');
  // MinWidth
  className += getClassNameFromShaped(props, 'sizing.minWidth');
  // MaxWidth
  className += getClassNameFromShaped(props, 'sizing.maxWidth');
  // Height
  className += getClassNameFromShaped(props, 'sizing.height');
  // MinHeight
  className += getClassNameFromShaped(props, 'sizing.minHeight');
  // MaxHeight
  className += getClassNameFromShaped(props, 'sizing.maxHeight');

  /**
   * Typography
   */

  // FontFamily
  className += getClassNameFromShaped(props, 'typography.fontFamily');
  // FontSize
  className += getClassNameFromShaped(props, 'typography.fontSize');
  // FontSmoothing
  className += getClassNameFromShaped(props, 'typography.fontSmoothing');
  // FontStyle
  className += getClassNameFromShaped(props, 'typography.fontStyle');
  // FontWeight
  className += getClassNameFromShaped(props, 'typography.fontWeight');
  // LetterSpacing
  className += getClassNameFromShaped(props, 'typography.letterSpacing');
  // LineHeight
  className += getClassNameFromShaped(props, 'typography.lineHeight');
  // ListStyleType
  className += getClassNameFromShaped(props, 'typography.listStyleType');
  // PlaceholderColor
  className += getClassNameFromShaped(props, 'typography.placeholderColor');
  // PlaceholderOpacity
  className += getClassNameFromShaped(props, 'typography.placeholderOpacity');
  // TextAlignment
  className += getClassNameFromShaped(props, 'typography.textAlignment');
  // TextColor
  className += getClassNameFromShaped(props, 'typography.textColor');
  // TextOpacity
  className += getClassNameFromShaped(props, 'typography.textOpacity');
  // TextDecoration
  className += getClassNameFromShaped(props, 'typography.textDecoration');
  // TextTransform
  className += getClassNameFromShaped(props, 'typography.textTransform');
  // VerticalAlignment
  className += getClassNameFromShaped(props, 'typography.verticalAlignment');
  // Whitespace
  className += getClassNameFromShaped(props, 'typography.whitespace');
  // WordBreak
  className += getClassNameFromShaped(props, 'typography.wordBreak');

  /**
   * Backgrounds
   */

  className += getClassNameFromShaped(props, 'backgrounds.backgroundAttachment');
  className += getClassNameFromShaped(props, 'backgrounds.backgroundColor');
  className += getClassNameFromShaped(props, 'backgrounds.backgroundOpacity');
  className += getClassNameFromShaped(props, 'backgrounds.backgroundPosition');
  className += getClassNameFromShaped(props, 'backgrounds.backgroundRepeat');
  className += getClassNameFromShaped(props, 'backgrounds.backgroundSize');

  /**
   * BORDERS
   */

  className += getClassNameFromShaped(props, 'borders.borderRadius');
  className += getClassNameFromShaped(props, 'borders.borderWidth');
  className += getClassNameFromShaped(props, 'borders.borderColor');
  className += getClassNameFromShaped(props, 'borders.borderOpacity');
  className += getClassNameFromShaped(props, 'borders.borderStyle');
  className += getClassNameFromShaped(props, 'borders.divideWidth');
  className += getClassNameFromShaped(props, 'borders.divideColor');
  className += getClassNameFromShaped(props, 'borders.divideOpacity');

  /**
   * TABLES
   */

  className += getClassNameFromShaped(props, 'tables.borderCollapse');
  className += getClassNameFromShaped(props, 'tables.tableLayout');

  /**
   * EFFECTS
   */

  className += getClassNameFromShaped(props, 'effects.boxShadow');
  className += getClassNameFromShaped(props, 'effects.opacity');

  /**
   * TRANSITIONS
   */

  className += getClassNameFromShaped(props, 'transitions.transitionProperty');
  className += getClassNameFromShaped(props, 'transitions.transitionDuration');
  className += getClassNameFromShaped(props, 'transitions.transitionTimingFunction');
  className += getClassNameFromShaped(props, 'transitions.transitionDelay');
  className += getClassNameFromShaped(props, 'transitions.animation');

  /**
   * TRANSFORMS
   */

  className += getClassNameFromShaped(props, 'transforms.scale');
  className += getClassNameFromShaped(props, 'transforms.rotate');
  className += getClassNameFromShaped(props, 'transforms.translate');
  className += getClassNameFromShaped(props, 'transforms.skew');
  className += getClassNameFromShaped(props, 'transforms.transformOrigin');

  /**
   * INTERACTIVITY
   */

  className += getClassNameFromShaped(props, 'interactivity.appearance');
  className += getClassNameFromShaped(props, 'interactivity.cursor');
  className += getClassNameFromShaped(props, 'interactivity.outline');
  className += getClassNameFromShaped(props, 'interactivity.pointerEvents');
  className += getClassNameFromShaped(props, 'interactivity.resize');
  className += getClassNameFromShaped(props, 'interactivity.userSelect');

  /**
   * SVG
   */

  className += getClassNameFromShaped(props, 'svg.fill');
  className += getClassNameFromShaped(props, 'svg.stroke');
  className += getClassNameFromShaped(props, 'svg.strokeWidth');

  /**
   * ACCESSIBILITY
   */

  className += getClassNameFromShaped(props, 'accessibility.screenReaders');

  console.timeEnd('Construct tailwind classes');

  return className ? className.trim() : '';

}