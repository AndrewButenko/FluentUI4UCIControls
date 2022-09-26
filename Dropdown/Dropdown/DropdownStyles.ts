import { IDropdownStyleProps, IDropdownStyles } from "@fluentui/react";

export const DropdownStyle = (props: IDropdownStyleProps): Partial<IDropdownStyles> => ({
    ...(props.disabled ? {
        root: {
            width: "100%"
        },
        title: {
            color: "rgb(50, 49, 48)",
            borderColor: "transparent",
            backgroundColor: "transparent",
            fontWeight: 600,
            ":hover": {
                backgroundColor: "rgb(226, 226, 226)"
            }
        },
        caretDown: {
            color: "transparent"
        }
    }: {
        root: {
            width: "100%"
        },
        title: {
            borderColor: "transparent",
            fontWeight: 600,
            ":hover": {
                borderColor: "rgb(96, 94, 92)",
                fontWeight: 400
            }
        },
        caretDown: {
            color: "transparent",
            ":hover": {
                color: "rgb(96, 94, 92)"
            }
        },
        dropdown: {
            ":focus:after": {
                borderColor: "transparent"
            }
        }
    })
});