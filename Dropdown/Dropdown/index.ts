import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { DropdownComponent, IDropdownComponentProps } from "./DropdownComponent";
import * as React from "react";

export class Dropdown implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private currentValue: number | null;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: IDropdownComponentProps = {
            disabled: context.mode.isControlDisabled,
            value: context.parameters.dropdown.raw,
            options: [...[{key: -1, text: "--Select--"}], ...context.parameters.dropdown.attributes!.Options.map(o => ({ key: o.Value, text: o.Label }))],
            onValueChanged: (value: number | null) => {
                this.currentValue = value;
                this.notifyOutputChanged();
            }
        };

        return React.createElement(
            DropdownComponent, props
        );
    }

    public getOutputs(): IOutputs {
        return {
            dropdown: this.currentValue == null ? undefined : this.currentValue
        };
    }

    public destroy(): void {
    }
}
