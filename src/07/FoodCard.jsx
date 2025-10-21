import busan from "../assets/busan.png"
import bank from "../assets/bank.png"
import market from "../assets/market.png"
import { useState } from "react"

export default function FoodCard({ itemdata }) {
    
    const [isActive, setIsActive] = useState(false);
    const toggleCallNumber = () => {
        setIsActive(isActive => isActive = !isActive);
    }

    return (
        <div className='w-full h-full flex justify-start items-start border-2 border-gray-300'>
            <div className="w-1/4 flex justify-center items-center">
                <img src={itemdata['구분'] == '광역지원센터' ? busan :
                    itemdata['구분'] == '기초푸드뱅크' ? bank : market} alt={itemdata['구분']} className='w-9/10 h-9/10' />
            </div>
            <div className="w-3/4 h-full flex flex-col jusfity-between">
                <p className='text-3xl p-2 font-bold'>
                    {itemdata['사업장명']}
                </p>
                <p className='text-2xl p-2 font-bold'>
                    {itemdata['운영주체명']}
                </p>
                <p>
                    {itemdata['사업장 소재지']}
                </p>
                <p className={`cursor-pointer ${isActive ? 'bg-blue-500 text-white': 'bg-blue-500 text-blue-500'}`} onClick={toggleCallNumber}>
                    {itemdata['연락처(대표번호)']}
                </p>
            </div>
        </div>
    )
}