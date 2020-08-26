import React from 'react';
import PropTypes from 'prop-types';

export interface ElementProps {
    tag?: string;
    attributes: {
        src?: string;
        alt?: string;
        autoFocus?: boolean;
        cols?: number;
        disabled?: boolean;
        placeholder?: string;
        rows?: number;
        label?: string;
        selected?: boolean;
        value?: string;
        max?: number;
        min?: number;
        checked?: boolean;
        type?: string;
    };
    children?: React.ReactNode;
    texts?: string[];
    tailwindUtilities?: any;
}

export const ElementTypes: PropTypes.InferProps<ElementProps> = {
    /**
     * HTML Tag
     */
    tag: PropTypes.oneOf([
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'blockquote',
        'body',
        'button',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'menu',
        'meta',
        'meter',
        'nav',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'slot',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr'
    ]),
    attributes: PropTypes.shape({
        /**
         * * For `img` tag: contains the path to the image you want to embed.
         * * For `audio` tag: the URL of the audio to embed.
         */
        src: PropTypes.string,
        /**
         * * For `img` tag: holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility.
         */
        alt: PropTypes.string,
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
         */
        autoFocus: PropTypes.bool,
        /**
         * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`.
         */
        cols: PropTypes.number,
        /**
         * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `<fieldset>`; if there is no containing element when the disabled attribute is set, the control is enabled.
         */
        disabled: PropTypes.bool,
        /**
         * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
         */
        placeholder: PropTypes.string,
        /**
         * The number of visible text lines for the control.
         */
        rows: PropTypes.number,
        /**
         * This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.
         */
        label: PropTypes.string,
        /**
         * If present, this Boolean attribute indicates that the option is initially selected.
         */
        selected: PropTypes.bool,
        /**
         * The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.
         */
        value: PropTypes.string,
        /**
         * This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0 and be a valid floating point number. The default value is 1.
         */
        max: PropTypes.number,
        /**
         * Minimum value
         */
        min: PropTypes.number,
        /**
         * Whether the command or control is checked
         */
        checked: PropTypes.bool,
        /**
         * A wide variety of types of input data and control widgets
         */
        type: PropTypes.oneOf([
            '',
            'button',
            'checkbox',
            'color',
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'radio',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week',
        ]),
    }),
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * An array of text lines inside of the element
     */
    texts: PropTypes.arrayOf(PropTypes.string),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,

};
