import React from 'react'
import { useState, useRef } from 'react';

export default function MyRef() {

    // state 변수.
    const [scnt, SetScnt] = useState(1);
    // component 변수.
    let cnt = 0;
    // ref 변수.
    const rcnt = useRef(0);

    const handleCnt = () => {
        cnt = cnt + 1;
        console.log(cnt);
    }

    const handlesCnt = () => {
        SetScnt(scnt + 1);
    }

    const handlerCnt = () => {
        rcnt.current = rcnt.current + 1;
        console.log("rcnt : ", rcnt);
    }

    return (
        <div className="w-full h-full text-xl font-bold flex justify-center items-center 
        space-x-10">
            <div className="text-blue-700">
                <div className="bg-blue-700 text-white cursor-pointer" onClick={handleCnt}>일반 컴포넌트 변수</div>
                <div className="text-center">{cnt}</div>
            </div>
            <div className="text-lime-700">
                <div className="bg-lime-700 text-white cursor-pointer" onClick={handlesCnt}>state 변수</div>
                <div className="text-center">{scnt}</div>
            </div>
            <div className="text-orange-700">
                <div className="bg-orange-700 text-white cursor-pointer" onClick={handlerCnt}>ref 변수</div>
                <div className="text-center">{rcnt.current}</div>
            </div>
        </div>
    )
}
