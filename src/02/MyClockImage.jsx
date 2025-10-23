import ClockImage from './ClockImage.png'

export default function MyClockImage() {
    return (
        <div className="w-full flex justify-center items-center">
            <img src={ClockImage} className='w-100'/>
        </div>
    )
}