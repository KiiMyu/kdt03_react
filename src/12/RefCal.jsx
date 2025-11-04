import React from 'react'
import TailButton from '../components/TailButton'
import { useRef, useEffect } from 'react'

export default function RefCal() {
    // input 요소 ref 연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const opRef = useRef();

    // 컴포넌트가 생성될때
    useEffect(() => {
        txt1Ref.current.focus();
    }, []);

    const handleClicked = (e) => {
        e.preventDefault();

        let num1 = txt1Ref.current?.value ?? ""; // ? 로 undefined 검색 가능. ?? 로 뒤에 없으면 뭘 줄건지 세팅 가능.
        let num2 = txt2Ref.current?.value ?? "";

        let op = opRef.current?.value ?? "+";

        let num3 = 0;

        switch (op) {
            case "+":
                num3 = Number(num1) + Number(num2);
                break;
            case "-":
                num3 = Number(num1) - Number(num2);
                break;
            case "x":
                num3 = Number(num1) * Number(num2);
                break;
            case "/":
                Number(num2) == 0 ? num3="오류" : num3 = Number(num1) / Number(num2);
                break;
        }

        txt3Ref.current.value = num3;
    }

    const handleTxt1 = () => {
        txt1Ref.current.value = '';
        txt2Ref.current.value = '';
        txt3Ref.current.value = '';
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-8/10 h-30 bg-yellow-100 flex justify-center items-center rounded-2xl'>
                <form className='w-9/10 flex justify-center' method='post'>
                    <input type="number" name="txt1" ref={txt1Ref} onFocus={handleTxt1} className='border border-blue-300 rounded-2xl bg-white focus:border-blue-600 focus:border-4' />
                    <select ref={opRef} className='w-20 flex justify-center'>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="x">x</option>
                        <option value="/">/</option>
                    </select>
                    <input type="number" name="txt2" ref={txt2Ref} className='border border-blue-300 rounded-2xl bg-white focus:border-blue-600 focus:border-4' />
                    <TailButton color="blue" caption="=" onClickEvent={handleClicked} />
                    <input type="text" name="txt3" readOnly ref={txt3Ref} className='border border-blue-300 rounded-2xl bg-white focus:border-blue-600 focus:border-4' />
                </form>
            </div>
        </div>
    )
}
