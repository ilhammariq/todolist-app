import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        if (!text || /^\s*$/.test(text)) return
        const id = Math.floor(Math.random() * 1000);
        const todo = {
            id: id,
            todoText: text,
            isCompleted: false
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const removeTodo = (id) => {
        const newTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(newTodos)
    }

    const doneTodo = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setTodos(newTodos)
    }

    return (
        <div>
            <div className='bg-gray-100 shadow-lg rounded-lg px-10 py-12 mt-8 min-h-[600px]'>
                <h1 className='text-2xl md:text-4xl font-bold text-center mb-10'>Create Todo List</h1>
                <TodoForm addTodo={addTodo} />
                {todos.map(item =>
                    <div key={item.id} className={`flex items-center gap-2 justify-between ${item.isCompleted && 'bg-cyan-300'} bg-cyan-500 px-3 py-1 md:px-5 md:py-2 font-semibold text-white rounded-md mb-3`}>
                        <span className={`${item.isCompleted && 'line-through'} text-xs md:text-base truncate`}>{item.todoText}</span>
                        <div className='flex items-center gap-2 text-2xl md:text-3xl'>
                            <IoIosCloseCircleOutline onClick={() => removeTodo(item.id)} className='cursor-pointer' />
                            {!item.isCompleted &&
                                <IoIosCheckmarkCircleOutline onClick={() => doneTodo(item.id)} className='cursor-pointer' />
                            }
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}
