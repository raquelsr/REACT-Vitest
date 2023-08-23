export type TextfieldProps = {
  label?: string,
  className?: string,
  name: string,
  value: string,
  placeholder: string,
  disabled?: boolean,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
