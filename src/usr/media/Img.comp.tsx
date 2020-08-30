import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';
import pickWithValues from '../utils/pickWithValues';

export interface ImgProps {
    globalAttrs: GlobalProps;
    alt?: string;
    height?: number;
    width?: number;
    src?: string;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Img = ({
                tailwindUtilities,
                alt, src,
                height, width,
                globalAttrs
            }: ImgProps) => {
    const properties = {...pickWithValues(globalAttrs), ...pickWithValues({
            alt, src, height, width
        })};
    return (
        <HtmlElement
            tag="img"
            tailwindUtilities={tailwindUtilities}
            {...properties}
        />
    );
};

Img.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Defines an alternative text description of the image.
     */
    alt: PropTypes.string,
    /**
     * The image URL. Mandatory for the <img> element.
     */
    src: PropTypes.string,
    /**
     * The intrinsic height of the image, in pixels. Must be an integer without a unit.
     */
    height: PropTypes.number,
    /**
     * The intrinsic width of the image in pixels. Must be an integer without a unit.
     */
    width: PropTypes.number,
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};

Img.defaultProps = {
    alt: 'No Image'
};

export default Img;
