import React, { useState } from 'react'

export default function TodoForm(props) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(text)
        setText('')
    }

    return (
        <div className='mb-10'>
            <form onSubmit={handleSubmit}>
                <div className='w-full flex items-center justify-center'>
                    <input
                        type='text'
                        placeholder='Add a Todo'
                        value={text}
                        className='md:p-2 text-xs md:text-base px-2 py-1 text-slate-700 font-semibold outline-none rounded-l-md border-2 border-cyan-500 w-3/5'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className='py-1 px-2 md:py-2 md:px-3 border-2 border-cyan-500 bg-cyan-500 rounded-r-md text-xs md:text-base text-white font-semibold'>Add Todo</button>
                </div>
            </form>
        </div>
    )
}
