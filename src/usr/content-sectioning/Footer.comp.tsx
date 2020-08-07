import React from 'react';
import {FooterProps, FooterTypes} from './Footer.props';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Footer = (props: FooterProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    return (
        <footer>
            {props.children}
        </footer>
    );
};

Footer.propTypes = FooterTypes;

Footer.defaultProps = {
    children: [
        <span />
    ],
};

export default Footer;
