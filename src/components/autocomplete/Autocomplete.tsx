// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { CSSProperties } from 'react';
import Select, { Props, StylesConfig } from 'react-select';
import './styles.scss';

export const Autocomplete: React.FC<Props> = ({
  onOptionChange,
  label,
  ...rest
}) => {
  const customStyles: StylesConfig = {
    control: (base: CSSProperties) => ({
      ...base,
      border: 'none',
      borderBottom: '2px solid black',
      borderRadius: '0',
      boxShadow: '0',
      background: 'white',
      '&:hover': {
        borderColor: 'black',
      },
      backgroundColor: 'white',
      color: 'black',
    }),
  };

  return (
    <div className='autocomplete-wrapper' data-testid='autocomplete'>
      <label className='autocomplete-label'>{label}</label>
      <Select
        isDisabled={rest.disabled}
        className='autocomplete'
        onChange={onOptionChange}
        styles={customStyles}
        maxMenuHeight={250}
        name={name}
        {...rest}
      />
    </div>
  );
};
