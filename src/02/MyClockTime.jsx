import MyClockImage from "./MyClockImage";

export default function MyClockTime () {
    let nowTime = new Date()

    return (
        <div className="text-4xl flex-col justify-center items-center text-center">
            <MyClockImage />
            현재시각 : {nowTime.getHours() /12 == 1 ? `오후 ${nowTime.getHours() == 12 ? 12 : nowTime.getHours() - 12} ` : `오전 ${nowTime.getHours()} ` }
             : {nowTime.getMinutes().toString().padStart(2, '0')} : {nowTime.getSeconds().toString().padStart(2, '0')}
             {/* {nowTime.toLocaleTimeString()} */}
        </div>
    )
}