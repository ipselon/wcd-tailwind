import React from 'react';
import {ArticleProps, ArticleTypes} from './Article.props';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Article = (props: ArticleProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    return (
        <article>
            {props.children}
        </article>
    );
};

Article.propTypes = ArticleTypes;

Article.defaultProps = {
    children: [
        <span />
    ],
};

export default Article;
