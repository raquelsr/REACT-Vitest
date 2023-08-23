import { useState } from 'react'
import { Textfield } from '../components/textfield';

export const ComponentList = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')

    return (
        <div>
            <div>ComponentList</div>
            <button className="card"
                onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
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
        </div>
    );
}
