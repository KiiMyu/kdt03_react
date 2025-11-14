import React from 'react'
import TailButton from '../components/TailButton'
// import { useAtom } from 'jotai'
// import { todosAtom } from './AtomsTodo'
import { useState, useEffect } from 'react'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export default function TodoItem({ todo, todos, setTodos, getTodos }) {
    //const [todos, setTodos] = useAtom(todosAtom)
    //const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleToggle = async () => {
        // const newItem = todos.map( t => t.id == todo.id ? {...t, completed : !todo.completed} : t)
        // setTodos(newItem)

        const resp = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
            method: 'PATCH',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: !todo.completed })
        })

        if (resp.ok) {
            getTodos()
        } else {
            console.error('Error toggling todo: ', resp.statusText)
        }
    }

    const handleSave = async () => {
        // const newItem = todos.map(t => t.id == todo.id ? { ...t, text: t.text = editText } : t)
        // setTodos(newItem)
        // setIsEdit(false)
        const resp = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
            method: 'PATCH',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: editText })
        })

        if (resp.ok) {
            getTodos()
            setIsEdit(false)
        } else {
            console.error('Error edit todo: ', resp.statusText)
        }
    }

    const handleCancel = () => {
        setEditText(todo.text)
        setIsEdit(false)
    }

    const handleDelete = async () => {
        // const newItem = todos.filter( t => t.id != todo.id)
        // setTodos(newItem)
        const resp = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
            method: 'DELETE',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
            }
        })

        if (resp.ok) {
            getTodos()
        } else {
            console.error('Error toggling todo: ', resp.statusText)
        }
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
            {isEdit ? <input type="text" value={editText} onChange={(e) => { setEditText(e.target.value) }} className="flex-1 p-2 border border-gray-200 rounded-sm" />
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
