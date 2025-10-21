import MyClockImage from "./MyClockImage";
import { useState, useEffect } from "react";

export default function MyClockTime () {
    let nowTime = new Date()

    const[ currentTime, setCurrentTime ] = useState(new Date());

    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, [])

    return (
        <div className="text-4xl flex-col justify-center items-center text-center">
            <MyClockImage />
            현재시각 : {currentTime.toLocaleTimeString()}
             {/* {nowTime.toLocaleTimeString()} */}
        </div>
    )
}