import getClassNameFromShaped from './getClassNameFromShaped';

const pathsInShape = [
  /**
   * Layout
   */
  // Container
  'layout.container',
// Box Sizing
  'layout.boxSizing',
// Display
  'layout.display',
// Float
  'layout.float',
// Clear
  'layout.float',
// ObjectFit
  'layout.objectFit',
// ObjectPosition
  'layout.objectPosition',
// Overflow
  'layout.overflow',
// Position
  'layout.position',
// TopRightBottomLeft
  'layout.topRightBottomLeft',
// Visibility
  'layout.visibility',

  /**
   * Flexbox
   */

// FlexDirection
  'flexbox.flexDirection',
// FlexWrap
  'flexbox.flexWrap',
// AlignItems
  'flexbox.alignItems',
// AlignContent
  'flexbox.alignContent',
// AlignSelf
  'flexbox.alignSelf',
// JustifyContent
  'flexbox.justifyContent',
// Flex
  'flexbox.flex',
// FlexGrow
  'flexbox.flexGrow',
// FlexShrink
  'flexbox.flexShrink',
// Order
  'flexbox.order',

  /**
   * Grid
   */

// GridTemplateColumns
  'grid.gridTemplateColumns',
// GridColumnStart
  'grid.gridColumnStart',
// GridColumnEnd
  'grid.gridColumnEnd',
// GridColumnSpan
  'grid.gridColumnSpan',
// GridTemplateRows
  'grid.gridTemplateRows',
// GridRowStart
  'grid.gridRowStart',
// GridRowEnd
  'grid.gridRowEnd',
// GridRowSpan
  'grid.gridRowSpan',
// Gap
  'grid.gap',
// RowGap
  'grid.rowGap',
// ColumnGap
  'grid.columnGap',
// GridAutoFlow
  'grid.gridAutoFlow',

  /**
   * Spacing
   */

// Padding
  'spacing.padding',
// PaddingTop
  'spacing.paddingTop',
// PaddingLeft
  'spacing.paddingLeft',
// PaddingRight
  'spacing.paddingRight',
// PaddingBottom
  'spacing.paddingBottom',
// PaddingVertical
  'spacing.paddingVertical',
// PaddingHorizontal
  'spacing.paddingHorizontal',
// Margin
  'spacing.margin',
// MarginTop
  'spacing.marginTop',
// MarginLeft
  'spacing.marginLeft',
// MarginRight
  'spacing.marginRight',
// MarginBottom
  'spacing.marginBottom',
// MarginVertical
  'spacing.marginVertical',
// MarginHorizontal
  'spacing.marginHorizontal',
// SpaceBetweenVertical
  'spacing.spaceBetweenVertical',
// SpaceBetweenHorizontal
  'spacing.spaceBetweenHorizontal',

  /**
   * Sizing
   */

// Width
  'sizing.width',
// MinWidth
  'sizing.minWidth',
// MaxWidth
  'sizing.maxWidth',
// Height
  'sizing.height',
// MinHeight
  'sizing.minHeight',
// MaxHeight
  'sizing.maxHeight',

  /**
   * Typography
   */

// FontFamily
  'typography.fontFamily',
// FontSize
  'typography.fontSize',
// FontSmoothing
  'typography.fontSmoothing',
// FontStyle
  'typography.fontStyle',
// FontWeight
  'typography.fontWeight',
// LetterSpacing
  'typography.letterSpacing',
// LineHeight
  'typography.lineHeight',
// ListStyleType
  'typography.listStyleType',
// PlaceholderColor
  'typography.placeholderColor',
// PlaceholderOpacity
  'typography.placeholderOpacity',
// TextAlignment
  'typography.textAlignment',
// TextColor
  'typography.textColor',
// TextOpacity
  'typography.textOpacity',
// TextDecoration
  'typography.textDecoration',
// TextTransform
  'typography.textTransform',
// VerticalAlignment
  'typography.verticalAlignment',
// Whitespace
  'typography.whitespace',
// WordBreak
  'typography.wordBreak',

  /**
   * Backgrounds
   */

  'backgrounds.backgroundAttachment',
  'backgrounds.backgroundColor',
  'backgrounds.backgroundOpacity',
  'backgrounds.backgroundPosition',
  'backgrounds.backgroundRepeat',
  'backgrounds.backgroundSize',

  /**
   * BORDERS
   */

  'borders.borderRadius',
  'borders.borderWidth',
  'borders.borderColor',
  'borders.borderOpacity',
  'borders.borderStyle',
  'borders.divideWidth',
  'borders.divideColor',
  'borders.divideOpacity',

  /**
   * TABLES
   */

  'tables.borderCollapse',
  'tables.tableLayout',

  /**
   * EFFECTS
   */

  'effects.boxShadow',
  'effects.opacity',

  /**
   * TRANSITIONS
   */

  'transitions.transitionProperty',
  'transitions.transitionDuration',
  'transitions.transitionTimingFunction',
  'transitions.transitionDelay',
  'transitions.animation',

  /**
   * TRANSFORMS
   */

  'transforms.scale',
  'transforms.rotate',
  'transforms.translate',
  'transforms.skew',
  'transforms.transformOrigin',

  /**
   * INTERACTIVITY
   */

  'interactivity.appearance',
  'interactivity.cursor',
  'interactivity.outline',
  'interactivity.pointerEvents',
  'interactivity.resize',
  'interactivity.userSelect',

  /**
   * SVG
   */

  'svg.fill',
  'svg.stroke',
  'svg.strokeWidth',

  /**
   * ACCESSIBILITY
   */

  'accessibility.screenReaders',

];

export default function (props) {
  let className = '';
  pathsInShape.forEach(path => {
    className += getClassNameFromShaped(props, path);
  });
  return className ? className.trim() : '';
}