import {HtmlElementProps} from "../HtmlElement.props";
import get from "lodash/get";

function getClassNameByFlag(
    props: HtmlElementProps,
    path: string,
    value?: string,
    prefix?: string
): string {
    let propertyValue = get(props, path, false);
    if (propertyValue) {
        if (prefix) {
            return ` ${prefix}${value}`;
        }
        return ` ${value}`;
    }
    return '';
}

export default getClassNameByFlag;
