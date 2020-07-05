import React from 'react';
import PropTypes from 'prop-types';
import {LayoutProps, LayoutTypes} from "./props/layout.props";
import {FlexboxProps, FlexboxTypes} from "./props/flexbox.props";
import {GridProps, GridTypes} from "./props/grid.props";
import {SpacingProps, SpacingTypes} from "./props/spacing.props";

export interface HtmlElementProps {
    layout: LayoutProps;
    flexbox: FlexboxProps;
    grid: GridProps;
    spacing: SpacingProps;
    sizing: any;
    typography: any;
    backgrounds: any;
    borders: any;
    tables: any;
    effects: any;
    transitions: any;
    transforms: any;
    interactivity: any;
    svg: any;
    accessibility: any;

    _htmlTag?: string;
    __htmlAttributes?: {
        img: {
            src?: string;
        }
    };
    _children?: React.ReactNode;
}

export const HtmlElementTypes: PropTypes.InferProps<HtmlElementProps> = {
    /**
     *
     */
    layout: PropTypes.shape(LayoutTypes),
    flexbox: PropTypes.shape(FlexboxTypes),
    grid: PropTypes.shape(GridTypes),
    spacing: PropTypes.shape(SpacingTypes),
    sizing: PropTypes.shape({}),
    typography: PropTypes.shape({}),
    backgrounds: PropTypes.shape({}),
    borders: PropTypes.shape({}),
    tables: PropTypes.shape({}),
    effects: PropTypes.shape({}),
    transitions: PropTypes.shape({}),
    transforms: PropTypes.shape({}),
    interactivity: PropTypes.shape({}),
    svg: PropTypes.shape({}),
    accessibility: PropTypes.shape({}),
    /**
     * HTML Tag
     */
    _htmlTag: PropTypes.oneOf([
        'div',
        'h1',
        'h2',
        'span',
        'p',
        'img'
    ]),
    /**
     * Set HTML attributes according to the selected HTML Tag
     */
    __htmlAttributes: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string,
        }),
    }),
    /**
     * An array of the nested HTML elements
     */
    _children: PropTypes.arrayOf(PropTypes.element),
};
