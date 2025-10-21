const BTStyle = {
    blue :  {
        base : "bg-blue-500",
        hover : "hover:bg-blue-900",
        divback : "bg-blue-200"
    },
    orange :  {
        base : "bg-orange-500",
        hover : "hover:bg-orange-900",
        divback : "bg-orange-200"
    },
        lime :  {
        base : "bg-lime-500",
        hover : "hover:bg-lime-900",
        divback : "bg-lime-200"
    }
}

export default function TailButton({color, caption, onClickEvent}) { 
    const btstyle=BTStyle[color];

    return (
        <button className={`${btstyle.base} text-white rounded ${btstyle.hover} hover:font-bold px-4 py-2 cursor-pointer`} onClick={onClickEvent}>
            {caption}
        </button>
    )
}