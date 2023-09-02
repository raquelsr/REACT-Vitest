import * as React from 'react';
import { IconProps } from '../icon/types';
import { CheckboxMTProps } from './types';
import classnames from 'classnames';
import { Icon } from '../icon';
import './styles.scss'

export const CheckboxMT: React.FC<CheckboxMTProps> = ({
  checked,
  value,
  color,
  checkedColor,
  className,
  round,
  minus,
  disabled,
  onClick,
  ...rest
}) => {
  const name = minus
    ? 'checkbox-minus'
    : checked
      ? (`checkbox${round ? '-round' : ''}-checked` as IconProps['name'])
      : (`checkbox${round ? '-round' : ''}` as IconProps['name']);

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (disabled || !onClick) return;

    onClick(event);
  };

  return (
    <div className={classnames('checkbox', className, {
      disabled,
    })}
      onClick={handleOnClick}
      aria-hidden='true'
      aria-checked='false'
      role='checkbox'
      title='checkbox-mt'
      {...rest}
    >
      <div>
        {// @ts-ignore
          <Icon size={10} name={name} color={checked ? checkedColor || 'black' : color || 'grey'} />
        }
      </div>

      <span>{value}</span>
    </div >
  );
};
