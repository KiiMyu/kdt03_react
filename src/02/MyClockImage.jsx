import ClockImage from './ClockImage.png'

export default function MyClockImage() {
    return (
        <div className="w-screen flex justify-center">
            <img src={ClockImage} className='w-100'/>
        </div>
    )
}