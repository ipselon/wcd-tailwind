import React from 'react';
import {AddressTypes, AddressProps} from './Address.props';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const Address = (props: AddressProps) => {

    let elementProps: any = {
        'data-gen': 'tailwindcss',
    };

    const { tailwindUtilities } = props;

    let className = constructTailWindClassesString(tailwindUtilities);
    if (className) {
        elementProps.className = className.trim();
    }

    return (
        <address>
            {props.children}
        </address>
    );
};

Address.propTypes = AddressTypes;

Address.defaultProps = {
    children: [
        <span />
    ],
};

export default Address;
