import MyClockImage from "../02/MyClockImage";

function CurrentTime() {
    const now = new Date()

    return (
        <>
        <MyClockImage />
        <div className="text-4xl text-center bg-blue-900 text-white m-5">
            { now.getHours().toString().padStart(2, '0') } : { now.getMinutes().toString().padStart(2, '0') } : { now.getSeconds().toString().padStart(2, '0') } <br />
            { now.toTimeString() }
        </div>
        </>
    )
}

export default CurrentTime;