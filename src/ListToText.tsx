import { Component, ReactNode, createElement, CSSProperties } from "react";
import { ListToTextContainerProps } from "../typings/ListToTextProps";
import { ListToText as ListToTextComponent } from "./components/ListToText";

export interface ObjectProperties {
    className: string;
    style: CSSProperties | undefined;
    tabIndex?: number | undefined;
}

export default class ListToText extends Component<ListToTextContainerProps> {
    private properties: ObjectProperties;

    constructor(props: ListToTextContainerProps | Readonly<ListToTextContainerProps>) {
        super(props);
        this.properties = {
            className: this.props.class,
            style: this.props.style
        };
        if (this.props.addTabIndex) {
            this.properties.tabIndex = this.props.tabIndex;
        }
        if (this.props.listLimit >= 0) {
            this.props.source.setLimit(this.props.listLimit);
        }
    }

    render(): ReactNode {
        return (
            <ListToTextComponent
                items={this.props.source.items ?? []}
                template={this.props.textTemplate}
                delimeter={this.props.delimeter}
                nodeType={this.props.nodeType}
                fallbackText={this.props.fallbackText?.value}
                prefix={this.props.prefix?.value}
                sufix={this.props.sufix?.value}
                {...this.properties}
            />
        );
    }
}
