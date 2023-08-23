import { useState } from 'react'
import { Textfield } from '../components/textfield';
import './ComponentList.css';

export const ComponentList = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')

    return (
        <>
            <h3>Component List</h3>
            <div className='component-list'>
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
                    <div>Text: {text}</div>
                    <Textfield
                        label='Textfield'
                        name={text}
                        onChange={(event) => {
                            setText(event.target.value)
                        }}
                        value={text}
                        placeholder='Type...'
                    />
                </section>
            </div>
        </>
    );
}
