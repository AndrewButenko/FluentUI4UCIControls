import { IDatePickerStyleProps, IDatePickerStyles } from "@fluentui/react/lib/DatePicker";

export const datePickerStyle = (props: IDatePickerStyleProps): Partial<IDatePickerStyles> => ({
    ...(props.disabled ? {
      textField: {
        borderColor: "transparent",
        "& .ms-TextField-fieldGroup": {
          borderColor: "transparent"
        },
        "& .ms-TextField-field": {
          backgroundColor: "transparent",
          borderColor: "transparent",
          ":hover": {
            backgroundColor: "rgb(226, 226, 226)"          
          }
        }
      },
      icon: {
        color: "rgb(50, 49, 58)"
      }
    } : {
      textField: {
        "& .ms-TextField-fieldGroup": {
          borderColor: "transparent",
          ":after": {
            borderColor: "transparent"
          }
        }
      },
      icon: {
        color: "rgb(50, 49, 58)"
      }
    }
  )});