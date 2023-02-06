import { createElement, CSSProperties, ReactElement, useEffect, useState } from "react";
import { ObjectItem, DynamicValue } from "mendix";
import { NodeTypeEnum } from "../../typings/ListToTextProps";

export interface TextProps<T extends ObjectItem> {
    className?: string;
    style?: CSSProperties;
    items: T[];
    template: { get: (obj: T) => DynamicValue<string> };
    tabIndex?: number;
    delimeter: string;
    nodeType: NodeTypeEnum;
    fallbackText: string | undefined;
    prefix: string | undefined;
    sufix: string | undefined;
}
export function ListToText<T extends ObjectItem>(props: TextProps<T>): ReactElement {
    const { items, delimeter, template } = props;
    const [text, setText] = useState("");

    useEffect(() => {
        const newText = items.map(obj => template.get(obj).value).join(delimeter);
        setText(newText);
    }, [delimeter, items, template]);

    return (
        <props.nodeType className={props.className} style={props.style} tabIndex={props.tabIndex}>
            {items.length !== 0 ? props.prefix + text + props.sufix : props.fallbackText}
        </props.nodeType>
    );
}
