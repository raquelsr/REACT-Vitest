export interface CheckboxMTProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean,
  value?: string | JSX.Element,
  color?: string,
  checkedColor?: string,
  round?: boolean,
  minus?: boolean,
  disabled?: boolean,
}
