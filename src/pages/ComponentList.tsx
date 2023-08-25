import { useState } from 'react'
import { Textfield } from '../components/textfield';
import './ComponentList.scss';
import { Checkbox, CheckboxMT } from '../components/checkbox';
import { Autocomplete } from '../components/autocomplete';

export const ComponentList = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [autocomplete, setAutocomplete] = useState(null);

    const autocompleteOptions = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];

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
            <section>
                <span>Value: {autocomplete}</span>
                <Autocomplete
                    placeholder='Autocomplete'
                    options={autocompleteOptions}
                    //@ts-ignore
                    onOptionChange={({ value, label }) => setAutocomplete(value)} />
            </section>
        </div>
    );
}
