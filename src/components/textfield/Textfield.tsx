import React from 'react'
import { TextfieldProps as Props } from './types'
import './styles.scss'

export const Textfield: React.FC<Props> = ({
  label,
  className,
  name,
  value,
  placeholder,
  disabled,
  onFocus,
  onChange,
}) => {
  return (
    <div className={`field textfield-container ${className || ''}`}>
      <label className='label'>{label}</label>

      <input
        className='textfield-input'
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
        onChange={onChange}
        type='text'
      />
    </div>
  )
}
