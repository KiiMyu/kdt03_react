

export default function MyListCard({title, imgUrl, content}) {

    return (
        <div className="flex flex-row border-1 border-gray-200" >
            <img src={imgUrl} alt={title} className="object-contain w-3/10"/>
            <div className="flex flex-col">
                <h2 className="text-4xl m-5 text-gray-500">{title}</h2>
                <p className="ml-5 text-gray-700 ">{content}</p>
                <div className="flex flex-row h-2/10 justify-end items-end">
                    <p className="mr-2">❤</p>
                    <p>좋아요</p>
                </div>
            </div>
        </div>
    )
}