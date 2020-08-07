import React from 'react';
import {AsideProps, AsideTypes} from './Aside.props';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Aside = (props: AsideProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    return (
        <aside>
            {props.children}
        </aside>
    );
};

Aside.propTypes = AsideTypes;

Aside.defaultProps = {
    children: [
        <span />
    ],
};

export default Aside;
