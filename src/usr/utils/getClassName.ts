import get from "lodash/get";

function getClassName(
    props: any,
    path: string,
    defaultValue?: string,
    prefix?: string
): string {
    let propertyValue = get(props, path, defaultValue);
    if (propertyValue) {
        if (prefix) {
            return ` ${prefix}${propertyValue}`;
        }
        return ` ${propertyValue}`;
    }
    return '';
}

export default getClassName;
