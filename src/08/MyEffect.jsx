import { useState, useEffect } from "react"
import TailButton from "../components/TailButton";

export default function MyEffect() {
    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState();

    const handleClick = () => {
        setIsActive(!isActive);
        if(isActive) {
            setTag(<h1>상태 on</h1>)
        } else {
            setTag(<h1>상태 off</h1>)
        }
        console.log("handleClick", isActive)
    }

    const handleShow = () => {
        if(isActive) {
            setTag(<h1>상태 on</h1>)
        } else {
            setTag(<h1>상태 off</h1>)
        }
    }

    useEffect(() => {
        // 컴포넌트 생성시 한번 실행.
        console.log('컴포넌트 생성.')
    }, []); // 배열에 아무것도 안넣으면, 시작시 한번 실행.

    useEffect(()=>{
        console.log("useEffect", isActive)
    }, [isActive]) // array 에 state 변수가 들어감. state 변수가 변경될때 동작.

        useEffect(()=>{
        console.log("useEffect 상태가 변경될 때", isActive)
    }) // 상태가 변경될때마다.


    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <div>{tag}</div>
            {
                isActive ? <TailButton color='blue' caption='useEffect' onClickEvent={handleClick}/> :
                            <TailButton color='orange' caption='useEffect' onClickEvent={handleClick}/>
            }
            {
                <TailButton color='lime' caption='태그변경' onClickEvent={handleShow}/>
            }

        </div>
    )
}