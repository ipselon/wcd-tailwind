import React from 'react';
import {HeaderProps, HeaderTypes} from './Header.props';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Header = (props: HeaderProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    return (
        <header>
            {props.children}
        </header>
    );
};

Header.propTypes = HeaderTypes;

Header.defaultProps = {
    children: [
        <span />
    ],
};

export default Header;
