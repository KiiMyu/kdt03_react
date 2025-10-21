import FoodCard from "./FoodCard";
import data from './fooddata.json';
import TailButton from '../components/TailButton.jsx';
import { useState } from "react";
import { useEffect } from "react";

const categories = [
    ...new Set(data.map(item => item['운영주체 분류'].replaceAll(' ', ''))) // ... 으로 Array를 만들 수 있음.
]

//console.log(categories)

export default function Food() {
    //const [tags, setTags] = useState([]);

    const [foodData, setFoodData] = useState(data);
    //console.log(data);
    //console.log(data.map(item => item.사업장명));
    //let totaldata = data.map(item => item);
    const [selectCategory, setSelectCategory] = useState('');

    /*const showList = () => {
        setTags(tags => {return data.map((item, idx)=> <FoodCard key={`foodCard${idx}`}itemdata={item}/>)});
    }*/

    /*useEffect(() => { // 최초 1회만 실행할 수 있는 훅.
        showList();
    }, []);*/

    /*return (
        <div className='flex grid grid-cols-2 m-2'>
            {tags}
        </div>
    )*/

        const handleShowAll = () => {
            setFoodData(data)
        }

        const handleShowCategory = (ct) => {
            setFoodData(data.filter(item => item['운영주체 분류'].replaceAll(' ','') == ct))
        }
    

    return (
        <>
            <div className='m-8 flex justify-center items-center my-5 p-5 border gap-2'>
                <TailButton color='lime' caption='전체' onClickEvent={handleShowAll}/>
                {categories.map((item, idx) => <TailButton key={item} color='blue' caption={`${item}`} onClickEvent={() => handleShowCategory(item)} className=''/>)}
            </div>
            <div className='grid grid-cols-2 m-2 lg:grid-cols-3 gap-6'>
                {foodData.map((item, idx) => <FoodCard key={item["연락처(대표번호)"] + idx} itemdata={item} />)}
            </div>
        </>
    )
}