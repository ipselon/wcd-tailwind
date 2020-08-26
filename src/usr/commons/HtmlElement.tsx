import get from 'lodash/get';
import React from 'react';
import constructTailWindClassesString from '../utils/constructTailWindClassesString';

interface HtmlElementState {
    'data-gen'?: string,
    className?: string,
}

/**
 * HTML element component
 */
const HtmlElement = (props: any) => {
    const { tailwindUtilities, children, tag, ...rest } = props;

    const [elementProps, setElementProps] = React.useState<HtmlElementState>({
        'data-gen': 'tailwindcss',
        ...rest
    });

    React.useEffect(() => {
        setTimeout(() => {
            let className = constructTailWindClassesString(tailwindUtilities);
            if (className) {
                setElementProps({className: className.trim()});
            }
        }, 0);
    }, [tailwindUtilities]);

    return React.createElement(tag || 'div', elementProps, children);
};

export default HtmlElement;
