import classnames from 'classnames'
import { FC, PropsWithChildren, useState } from 'react'
import { Icon } from '../icon'
import { AccordionProps as Props } from './types'
import './styles.scss'

export const Accordion: FC<PropsWithChildren<Props>> = ({ title, defaultExpanded, children }) => {
  const [expanded, expand] = useState(defaultExpanded || false)

  return (
    <div className='note'>
      <div className='title'>
        <h4>{title}</h4>
        <button
          type='button'
          className={classnames('expand-icon', {
            expanded,
          })}
          onClick={() => expand(!expanded)}
        >
          <Icon name='chevron' width={12} height={8} viewBox={'0 0 12 8'} />
        </button>
      </div>
      {expanded && <div className={`text ${expanded ? 'expanded' : ''}`} >{children}</div>}
    </div>
  )
}
