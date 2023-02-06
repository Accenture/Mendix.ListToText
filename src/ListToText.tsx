import { Component, ReactNode, createElement } from "react";
import { ListToTextContainerProps } from "../typings/ListToTextProps";
import { ListToText as ListToTextComponent } from "./components/ListToText";

export default class ListToText extends Component<ListToTextContainerProps> {
    constructor(props: ListToTextContainerProps | Readonly<ListToTextContainerProps>) {
        super(props);

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
                className={this.props.class}
                style={this.props.style}
                tabIndex={this.props.addTabIndex ? this.props.tabIndex : undefined}
            />
        );
    }
}
