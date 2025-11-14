import React from 'react'
import TailButton from '../components/TailButton'
import { useRef,useState,useEffect } from 'react'
// import { useSetAtom } from 'jotai'
// import { todosAtom } from './AtomsTodo'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export default function TodoInput({todos, setTodos, getTodos}) {
    //const setTodos = useSetAtom(todosAtom)
    //const [todos, setTodos] = useState([]);
    const inRef = useRef()

    const handleAdd = async () => {
        if (inRef.current.value == "") {
            alert("값을 입력해 주세요.")
            inRef.current.focus();
            return;
        }

        // const newItem = {
        //     id: Date.now(),
        //     text: inRef.current.value,
        //     completed: false

        // }
        // setTodos(prev => [newItem, ...prev])
        // inRef.current.value = "";
        // inRef.current.focus();

        const response = await fetch(`${supabaseUrl}/rest/v1/todos`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: false, text: inRef.current.value})
        })

        if(response.ok) {
            getTodos()
            inRef.current.value = "";
            inRef.current.focus();
        } else {
            console.error('Error adding todo: ', response.statusText)
        }
    }

    useEffect( () => {
        if(todos == undefined || todos.length == 0) {
            return
        }
        localStorage.setItem("todo", JSON.stringify(todos))
        console.log(localStorage.getItem("todo"))
    },[todos])

    return (
        <div className="max-w-3xl flex flex-row justify-center items-center w-full my-4">
            <input type="text" ref={inRef} className="flex-1 border p2 border-gray-200 " />
            <TailButton color="blue" caption="추가" onClickEvent={handleAdd} />
        </div>
    )
}
