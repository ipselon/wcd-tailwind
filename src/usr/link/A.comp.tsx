import React from 'react';
import HtmlElement from '../commons/HtmlElement';
import PropTypes from 'prop-types';
import pickWithValues from '../utils/pickWithValues';
import { GlobalProps, GlobalTypes } from '../commons/Global.props';

export interface AProps {
    id?: string;
    globalAttrs?: GlobalProps;
    download?: boolean;
    href?: string;
    hreflang?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    text?: string;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const A = ({
               id,
               globalAttrs,
               tailwindUtilities,
               children,
               text,
               download,
               href,
               hreflang,
               ping,
               rel,
               target,
               type,
           }: AProps) => {
    let elementProps: any = pickWithValues({
        href,
        hreflang,
        ping,
        rel,
        target,
        type,
        id,
        ...globalAttrs
    });
    if (download) {
        elementProps.download = true;
    }
    return (
        <HtmlElement
            tag="a"
            tailwindUtilities={tailwindUtilities}
            {...elementProps}
        >
            {React.Children.count(children) > 0 ? children : text}
        </HtmlElement>
    );
};

A.propTypes = {
    /**
     * Global attributes are attributes common to all HTML elements;
     * they can be used on all elements, though they may have no effect on some elements.
     */
    globalAttrs: PropTypes.shape(GlobalTypes),
    /**
     * Prompts the user to save the linked URL instead of navigating to it.
     */
    download: PropTypes.bool,
    /**
     * The URL that the hyperlink points to.
     * Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers
     */
    href: PropTypes.string,
    /**
     * Hints at the human language of the linked URL.
     * No built-in functionality. Allowed values are the same as the global lang attribute.
     */
    hreflang: PropTypes.string,
    /**
     * A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs.
     * Typically for tracking.
     */
    ping: PropTypes.string,
    /**
     * The relationship of the linked URL as space-separated link types.
     */
    rel: PropTypes.string,
    /**
     * Hints at the linked URL’s format with a MIME type. No built-in functionality.
     */
    type: PropTypes.string,
    /**
     * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). The following keywords have special meanings for where to load the URL:
     * * _self: the current browsing context. (Default)
     * * _blank: usually a new tab, but users can configure browsers to open a new window instead.
     * * _parent: the parent browsing context of the current one. If no parent, behaves as _self.
     * * _top: the topmost browsing context (the "highest" context that’s an ancestor of the current one). If no ancestors, behaves as _self.
     */
    target: PropTypes.oneOf([
        '',
        '_self',
        '_blank',
        '_parent',
        '_top',
    ]),
    /**
     * Text content value.
     * > If there is an element in the children property the text is not rendered.
     */
    text: PropTypes.string,
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};

A.defaultProps = {
    href: '#',
    text: 'Link label',
};

export default A;
