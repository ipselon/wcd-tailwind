import React from 'react';
import HtmlElement from './commons/HtmlElement';
import { SectionProps, SectionTypes } from './commons/Section.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Article = ({tailwindUtilities, children}: SectionProps) => {
    return (
        <HtmlElement tag="article" tailwindUtilities={tailwindUtilities}>
            {children}
        </HtmlElement>
    );
};

Article.propTypes = SectionTypes;

Article.defaultProps = {
    children: [
        <span />
    ],
};

export default Article;
