import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
// import { useAtomValue } from "jotai"
// import { todosAtom, completedAtom, incompletedAtom } from "./AtomsTodo"
import { useState, useEffect, useRef } from "react"

export default function Todolist() {
    // const todos = useAtomValue(todosAtom);
    // const completed = useAtomValue(completedAtom)
    // const incompleted = useAtomValue(incompletedAtom)
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [incompleted, setIncompleted] = useState(0);
    const todoRef = useRef();

    // useEffect(() => {
    //     const newItem = {
    //         id: 1,
    //         text: "리액트 공부",
    //         completed: false,
    //     }

    //     // 자바스크립트 객체 -> 문자열
    //     localStorage.setItem("todo", JSON.stringify(newItem))

    //     // 문자열 -> 자바스크립트 객체
    //     const todoss = JSON.parse(localStorage.getItem("todo"))

    //     console.log(todoss);
    // }, [])

    useEffect(() => {
        if(localStorage.getItem("todo") == undefined) {
            return
        }
        const localValue = JSON.parse(localStorage.getItem("todo")) || []
        setTodos(localValue)
    }, [])

    useEffect(() => {
        setCompleted(todos.filter(todo => todo.completed).length)
        setIncompleted(todos.filter(todo => !todo.completed).length)
    }, [todos])

    const handleSave = (newItem) => {
        setTodos(newItem)
        console.log(newItem)
        localStorage.setItem("todo", JSON.stringify(newItem));
    }

    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="w-full max-w-3xl text-2xl font-bold text-center mt-10">
                할 일 목록
            </h1>
            <div className="w-full max-w-3xl p-5 my-5 bg-amber-50 border border-amber-300
            focus:outline-none focus:ring-2 focus:ring-blue-600">
                전채: {todos.length}개 | 완료: {completed}개 | 미완료: {incompleted}개
            </div>
            <TodoInput todos={todos} setTodos={handleSave}/>
            {
                todos && todos.map((item, index) => <TodoItem key={item.id} todo={item} todos={todos} setTodos={handleSave}/>)
            }
        </div>
    )
}
