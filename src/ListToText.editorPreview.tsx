import { ReactElement, createElement } from "react";
import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";
import { ListToTextPreviewProps } from "../typings/ListToTextProps";
import { ListToText, TextProps } from "./components/ListToText";
import { ObjectItem, GUID, ValueStatus } from "mendix";

function transformProps(props: ListToTextPreviewProps, source: ObjectItem[]): TextProps<ObjectItem> {
    return {
        template: {
            get: (_obj: ObjectItem) => {
                return { value: props.textTemplate, status: ValueStatus.Available };
            }
        },
        delimeter: props.delimeter,
        nodeType: props.nodeType,
        prefix: props.prefix,
        sufix: props.sufix,
        fallbackText: props.fallbackText,
        className: props.className,
        items: source,
        style: parseInlineStyle(props.style)
    };
}

export function preview(props: ListToTextPreviewProps): ReactElement {
    const max = 2;
    let length: number = max;
    if (props.listLimit !== null && props.listLimit >= 0 && props.listLimit < max) {
        length = props.listLimit;
    }
    const items: ObjectItem[] = Array.from({ length }).map((_, index) => ({
        id: String(index) as GUID
    }));
    return <ListToText {...transformProps(props, items)}></ListToText>;
}
