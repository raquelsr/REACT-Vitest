import { useState } from 'react'
import { Textfield } from '../components/textfield';
import './ComponentList.scss';
import { Checkbox, CheckboxMT } from '../components/checkbox';

export const ComponentList = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    return (
        <div className='component-list'>
            <h3>Component List</h3>
            <section>
                <p>Counter: {count}</p>
                <button
                    onClick={() => setCount((count) => count - 1)}>
                    - 1
                </button>
                <button
                    onClick={() => setCount((count) => count + 1)}>
                    + 1
                </button>
            </section>
            <section>
                Value : {text}
                <Textfield
                    label='Textfield: '
                    name={text}
                    onChange={(event) => {
                        setText(event.target.value)
                    }}
                    value={text}
                    placeholder='Type...'
                />
            </section>
            <section className='checkbox-section'>
                <Checkbox checked={checkbox} />
                <span>{checkbox ? 'It is checked!' : 'It is NOT checked!'}</span>
                <CheckboxMT checked={checkbox} onClick={() => setCheckbox(!checkbox)} />
            </section>
        </div>
    );
}
