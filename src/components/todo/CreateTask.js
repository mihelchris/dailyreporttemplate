import React, {useState} from 'react';

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }

    const [showResults, setShowResults] = useState(true)
    const [inputClassName, setClassName] = useState('hidden')
    const onClick = function() {
        if(!showResults) {
            setShowResults(true)
            setClassName('hidden')
        }
        else{
            setShowResults(false)
            setClassName('visible')
        }
    }
    
        return (
            <div className="tasks-add">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className={inputClassName}
                        value={value}
                        placeholder="Start typing..."
                        onChange={e => setValue(e.target.value)}
                    />
                </form>
                <button className="add-item no-print" onClick={onClick}><span>{ showResults ? 'Add items' : 'Done' }</span></button>
            </div>
    );
}

export default CreateTask