import TailButton from "../components/TailButton"
import { useState } from "react";

const BoxStyle = {
    blue :  {
        normal : "bg-white",
        change : "bg-blue-200",
    },
    orange :  {
        normal : "bg-white",
        change : "bg-orange-200",
    },
        lime :  {
        normal : "bg-white",
        change : "bg-lime-200",
    },
}

export default function MyToggleBox({color, caption}) {
    
    const bxStyle=BoxStyle[color];

    //const [clickcolor, setClickColor] = useState(bxStyle.normal);
    const [isActive, setIsActive] = useState(false);

    const handleClickColor = () => {
        //setClickColor(cc => cc == bxStyle.change ? cc = bxStyle.normal : cc = bxStyle.change)
        // if(clickcolor == bxStyle.change) {
        //     setClickColor(cc => cc = bxStyle.normal)
        // } else {
        //     setClickColor(cc => cc = bxStyle.change)
        // }

        setIsActive(prev => !prev)

        console.log(isActive)
    }

    return (
        <div>
            {/* MyToggleBox */}
            <div className={`flex flex-col w-full h-50 ${isActive ? bxStyle.change: bxStyle.normal} justify-center items-center m-4`}>
                <h1 className="text-xl font-bold mb-10">
                    {color} toggle box
                </h1>
                <p className={`text-sm ${isActive ? 'text-blue-500': 'text-red-500'} font-bold mb-3`}>
                    now status : {isActive ? 'on' : 'off'}
                </p>
                <TailButton color={color} caption={caption} onClickEvent={handleClickColor} />
            </div>
        </div>
    )
}