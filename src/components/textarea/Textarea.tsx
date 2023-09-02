import React from 'react';
import { TextareaProps as Props } from './types';
import './styles.scss';

export const Textarea: React.FC<Props> = ({ label, rows = 0, ...rest }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    autoSize();
  }, []);

  const autoSize = () => {
    setTimeout(() => {
      if (textareaRef.current && textareaRef.current.scrollHeight > (rows * 30)) {
        textareaRef.current.style.cssText = 'height:auto; padding:0';
        textareaRef.current.style.cssText = 'height:' + (textareaRef.current.scrollHeight + 5) + 'px';
      }
    }, 0);
  };

  return (
    <>
      {label && <label className='cms-label'>{label}</label>}
      <textarea
        autoComplete='off'
        spellCheck
        onKeyDown={autoSize}
        ref={textareaRef}
        rows={rows}
        {...rest}
      />
    </>
  );
};
