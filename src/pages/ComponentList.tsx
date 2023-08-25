import { useState } from 'react'
import { Textfield } from '../components/textfield';
import './ComponentList.scss';
import { Checkbox, CheckboxMT } from '../components/checkbox';
import { Autocomplete } from '../components/autocomplete';
import { Textarea } from '../components/textarea';

export const ComponentList = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [autocomplete, setAutocomplete] = useState(null);
    const [textarea, setTextarea] = useState('');

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
                <p>Value : {text}</p>
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
                <p>{checkbox ? 'It is checked!' : 'It is NOT checked!'}</p>
                <CheckboxMT checked={checkbox} onClick={() => setCheckbox(!checkbox)} />
            </section>
            <section>
                <p>Value: {autocomplete}</p>
                <Autocomplete
                    placeholder='Autocomplete'
                    options={autocompleteOptions}
                    //@ts-ignore
                    onOptionChange={({ value, label }) => setAutocomplete(value)} />
            </section>
            <section>
                <p>Value: {textarea}</p>
                <Textarea
                    name='text'
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    placeholder='Textarea'
                ></Textarea>
            </section>
        </div>
    );
}
