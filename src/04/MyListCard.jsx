// 1. usetate import
import { useState } from "react";

export default function MyListCard({title, imgUrl, content}) {
    // 2. useState 선언 ( useState는 상태 변경 훅 )
    const [scnt, setScnt] = useState(0);
    const [smul, setSmul] = useState(0);
    const handleClick = () => {
        // 3. 상태 변경을 위해 setScnt를 사용하면, scnt를 변경할 수 있음.
        setScnt(scnt + 1);
        // 
        setScnt(prev => prev + 1);

        console.log(`${title} click : ${scnt}` )
    }

    const hateClick = () => {
        setSmul(smul + 1);
    }

    return (
        <div className="flex flex-row border-1 border-gray-200" >
            <img src={imgUrl} alt={title} className="object-contain w-3/10"/>
            <div className="flex flex-col">
                <h2 className="text-4xl m-5 text-gray-500">{title}</h2>
                <p className="ml-5 text-gray-700 ">{content}</p>
                <div className="flex flex-row h-2/10 justify-between items-end">
                    <div className="cursor-pointer hover:text-red-500"
                        onClick={handleClick}>
                        ❤ 좋아요 ({scnt})
                    </div>
                    <div className="cursor-pointer hover:text-blue-500"
                        onClick={hateClick}>
                        💔 싫어요 ({smul})
                    </div>
                </div>
            </div>
        </div>
    )
}