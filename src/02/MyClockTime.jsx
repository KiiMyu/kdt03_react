import MyClockImage from "./MyClockImage";
import { useState, useEffect } from "react";

export default function MyClockTime () {
    let nowTime = new Date()

    const[ currentTime, setCurrentTime ] = useState(new Date());

    useEffect(() => {
        let timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(new Date()); // 사라질때, 시간 돌아가는걸 없앰.
    }, [])

    return (
        <div className="text-4xl flex-col justify-center items-center text-center">
            <MyClockImage />
            현재시각 : {currentTime.toLocaleTimeString()}
             {/* {nowTime.toLocaleTimeString()} */}
        </div>
    )
}