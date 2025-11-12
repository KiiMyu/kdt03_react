import React from 'react'
import TailButton from '../components/TailButton'
import { useRef,useState,useEffect } from 'react'
// import { useSetAtom } from 'jotai'
// import { todosAtom } from './AtomsTodo'

export default function TodoInput({todos, setTodos}) {
    //const setTodos = useSetAtom(todosAtom)
    //const [todos, setTodos] = useState([]);
    const inRef = useRef()

    const handleAdd = () => {
        if (inRef.current.value == "") {
            alert("값을 입력해 주세요.")
            inRef.current.focus();
            return;
        }

        const newItem = {
            id: Date.now(),
            text: inRef.current.value,
            completed: false

        }
        setTodos(prev => [newItem, ...prev])
        inRef.current.value = "";
        inRef.current.focus();
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
