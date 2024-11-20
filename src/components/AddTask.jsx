/* eslint-disable react/prop-types */
import { useState } from 'react';
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    
    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <input placeholder="Add text" value={text} onChange={handleChangeText}/>
            <button onClick={ () => {
                setText("");
                onAdd(text);
            }}>Add</button>
        </>
    );
}

export default AddTask;