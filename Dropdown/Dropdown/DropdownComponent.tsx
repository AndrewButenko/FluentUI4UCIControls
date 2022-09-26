import * as React from 'react';
import { Dropdown, IDropdownOption, Stack } from '@fluentui/react';
import { DropdownStyle } from './DropdownStyles';

export interface IDropdownComponentProps {
  disabled: boolean;
  value: number | null;
  onValueChanged: (value: number | null) => void;
  options: IDropdownOption[];
}

export const DropdownComponent: React.FunctionComponent<IDropdownComponentProps> = props => {

  const [placeholder, setPlaceholder] = React.useState<string>("---");

  return (
    <Dropdown
      styles={DropdownStyle}
      placeholder={placeholder}
      disabled={props.disabled}
      selectedKey={props.value}
      options={props.options}
      onChange={(_: any, option?: IDropdownOption) => {
        if (!option || option.key === -1) {
          props.onValueChanged(null);
          return;
        }

        props.onValueChanged(option.key as number);
      }}
      onMouseEnter={() => {
        !props.disabled && setPlaceholder("--Select--");
      }}
      onMouseLeave={() => {
        setPlaceholder("---");
      }}
    />
  );
}