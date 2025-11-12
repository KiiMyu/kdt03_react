import React from 'react'
import TailButton from '../components/TailButton'
// import { useAtom } from 'jotai'
// import { todosAtom } from './AtomsTodo'
import { useState, useEffect } from 'react'

export default function TodoItem({ todo, todos, setTodos }) {
    //const [todos, setTodos] = useAtom(todosAtom)
    //const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleToggle = () => {
        const newItem = todos.map( t => t.id == todo.id ? {...t, completed : !todo.completed} : t)
        setTodos(newItem)
        // setTodos(
        //     prev => prev.map( t => t.id == todo.id ? {...t, completed : !todo.completed} : t)
        // )
    }

    const handleSave = () => {
        const newItem = todos.map(t => t.id == todo.id ? {...t, text : t.text = editText} : t)
        setTodos(newItem)
        // setTodos(t => t.id == todo.id ? {...t, text : t.text = editText} : t)
        setIsEdit(false)
    }

    const handleCancel = () => {
        setEditText(todo.text)
        setIsEdit(false)
    }

    const handleDelete = () => {
        const newItem = todos.filter( t => t.id != todo.id)
        setTodos(newItem)
        // setTodos(prev => prev.filter( t => t.id != todo.id))
    }

    // useEffect(() => {
    //     if(todos.length == 0) {
    //         return
    //     }
    //     console.log(todos)
    //     setTodo(todos)
    // },[todos])

    return (
        <div className="flex flex-row justify-center max-w-3xl w-full my-4">
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="mr-3" />
            {isEdit ? <input type="text" value={editText} onChange={(e) => {setEditText(e.target.value)}} className="flex-1 p-2 border border-gray-200 rounded-sm" />
                : <span className="flex flex-1 p-4">
                    {editText}
                </span>
            }
            {
                isEdit ?
                    <>
                        <TailButton color="orange" caption="저장" onClickEvent={handleSave} />
                        <TailButton color="blue" caption="취소" onClickEvent={handleCancel} />
                    </>
                    : <>
                        <TailButton color="orange" caption="수정" onClickEvent={() => setIsEdit(true)} />
                        <TailButton color="blue" caption="삭제" onClickEvent={handleDelete} />
                    </>
            }
        </div>
    )
}
