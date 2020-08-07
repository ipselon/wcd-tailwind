import React from 'react';
import {H1Props, H1Types} from './H1.props';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const H1 = (props: H1Props) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    return (
        <h1>
            {props.children}
        </h1>
    );
};

H1.propTypes = H1Types;

H1.defaultProps = {
    children: [
        <span />
    ],
};

export default H1;
