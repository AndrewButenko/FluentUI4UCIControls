import * as React from 'react';
import { DatePicker, Label, Stack } from '@fluentui/react';
import * as moment from 'moment';
import { datePickerStyle } from './DatePickerStyles';

export interface IDatePickerComponentProps {
  disabled: boolean;
  value: Date | null;
  onValueChanged: (newValue: Date | null | undefined) => void;
  formatDate: (value?: Date) => string;
  dateTimeUserSettings: ComponentFramework.UserSettingApi.DateFormattingInfo;
}

export const DatePickerComponent: React.FunctionComponent<IDatePickerComponentProps> = props => {

  const [value, setValue] = React.useState<Date | null>(props.value);
  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Stack style={{width: "100%"}}>
      <DatePicker
        placeholder="---"
        allowTextInput
        styles={datePickerStyle}
        disabled={props.disabled}
        value={value ?? undefined}
        onSelectDate={(date: Date | null | undefined) => {
          props.onValueChanged(date);
        }}
        formatDate={props.formatDate}
        parseDateFromString={(dateStr: string) => {
          const m = moment(dateStr, props.dateTimeUserSettings.shortDatePattern.toUpperCase());
          if (m.isValid()) {
            props.onValueChanged(m.toDate());
            return m.toDate();
          }

          props.onValueChanged(null);
          return value!;
        }}
        showGoToToday={false}
        firstDayOfWeek={props.dateTimeUserSettings.firstDayOfWeek}
        showMonthPickerAsOverlay={true}
        strings={{
          goToToday: "",
          days: props.dateTimeUserSettings.dayNames,
          months: props.dateTimeUserSettings.monthNames,
          shortDays: props.dateTimeUserSettings.shortestDayNames,
          shortMonths: props.dateTimeUserSettings.abbreviatedMonthNames
        }}
      />
    </Stack>
  );
}