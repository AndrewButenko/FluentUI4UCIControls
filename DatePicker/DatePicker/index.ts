import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { DatePickerComponent } from "./DatePickerComponent";

export class DatePicker implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private internalValue: Date | undefined;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        return React.createElement(
            DatePickerComponent, {
                disabled: context.mode.isControlDisabled,
                value: context.parameters.date.raw,
                dateTimeUserSettings: context.userSettings.dateFormattingInfo,
                onValueChanged: (newValue: Date | null | undefined) => {
                    if (newValue == null) {
                        newValue = undefined;
                    }

                    this.internalValue = newValue;
                    this.notifyOutputChanged();
                },
                formatDate: (value: Date | undefined) => {
                    if (!value) {
                        return "";
                    }

                    return context.formatting.formatDateShort(value, false);
                }
            }
        );
    }

    public getOutputs(): IOutputs {
        return { 
            date: this.internalValue
        };
    }

    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
