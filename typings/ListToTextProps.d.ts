/**
 * This file was generated from ListToText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListExpressionValue } from "mendix";

export type NodeTypeEnum = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface ListToTextContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    source: ListValue;
    textTemplate: ListExpressionValue<string>;
    listLimit: number;
    delimeter: string;
    nodeType: NodeTypeEnum;
    fallbackText?: DynamicValue<string>;
    prefix?: DynamicValue<string>;
    sufix?: DynamicValue<string>;
    addTabIndex: boolean;
}

export interface ListToTextPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    source: {} | { type: string } | null;
    textTemplate: string;
    listLimit: number | null;
    delimeter: string;
    nodeType: NodeTypeEnum;
    fallbackText: string;
    prefix: string;
    sufix: string;
    addTabIndex: boolean;
}
