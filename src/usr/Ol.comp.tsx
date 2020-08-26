import React from 'react';
import HtmlElement from './commons/HtmlElement';
import PropTypes from 'prop-types';

export interface OlProps {
    reversed?: boolean;
    start?: number;
    type?: string;
    children?: React.ReactNode;
    tailwindUtilities?: any;
}

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Ol = ({
                tailwindUtilities,
                children,
                reversed,
                start,
                type,
            }: OlProps) => {
    return (
        <HtmlElement
            tag="ol"
            tailwindUtilities={tailwindUtilities}
            reversed={reversed}
            start={start}
            type={type}
        >
            {children}
        </HtmlElement>
    );
};

Ol.propTypes = {
    /**
     * A Boolean attribute specifies that the list’s items are in reverse order.
     * Items will be numbered from high to low.
     */
    reversed: PropTypes.bool,
    /**
     * An integer to start counting from for the list items.
     * Always an Arabic numeral (1, 2, 3, etc.), even when the numbering type is letters or Roman numerals.
     * For example, to start numbering elements from the letter "d" or the Roman numeral "iv," use start="4".
     */
    start: PropTypes.number,
    /**
     * Sets the numbering type:
     * * `a` for lowercase letters
     * * `A` for uppercase letters
     * * `i` for lowercase Roman numerals
     * * `I` for uppercase Roman numerals
     * * `1` for numbers (default)
     */
    type: PropTypes.oneOf(['a', 'A', 'i', 'I', '1']),
    /**
     * An array of the nested HTML elements
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Tail Wind Classes `test`
     */
    tailwindUtilities: PropTypes.object,
};

Ol.defaultProps = {
    type: '1',
    children: [
        <span/>
    ],
};

export default Ol;
