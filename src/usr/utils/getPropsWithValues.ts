import {HtmlElementProps} from "../HtmlElement.props";
import isNil from 'lodash/isNil';
import get from "lodash/get";
import set from "lodash/set";

function getPropsWithValues(
    props: HtmlElementProps,
    pathToAttrMap: { path: string, attrName: string }[],
): any {
    let result = {};
    if (pathToAttrMap && pathToAttrMap.length > 0) {
        let value: any;
        pathToAttrMap.forEach(({ path, attrName }) => {
            value = get(props, path, undefined);
            if (!isNil(value)) {
                set(result, attrName, value);
            }
        });
    }
    return result;
}

export default getPropsWithValues;
