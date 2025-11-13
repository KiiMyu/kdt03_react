import React from 'react'
import TailCard from '../components/TailCard'
import { useRef, useState, useEffect } from 'react'
import TailButton from '../components/TailButton';

export default function Gallery() {
    let searchText = useRef();
    const [jsonData, setJsonData] = useState();

    const RenewCard = async () => {

//        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${import.meta.env.VITE_ACCIDENT_API}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURI(searchText.current.value)}&_type=json`
        
        let url = `/api/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${import.meta.env.VITE_ACCIDENT_API}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURI(searchText.current.value)}&_type=json`
        
        try {
            let resp = await fetch(url);
            let data = await resp.json();

            console.log(data);
            setJsonData(json => data);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(()=> {
    //     RenewCard();
    // }, [])

    useEffect(() => {
        
    }, [jsonData]);

    return (
        <div className='h-screen flex flex-col overflow-y-hidden'>
            <h1 className='text-center text-4xl p-10'>한국관광공사 사진 정보 서비스</h1>
            <div className='w-9/10 flex flex-row justify-between items-center bg-amber-200 rounded-2xl px-2 mx-auto mb-4'>
                <input type='text' ref={searchText} className='border border-gray-800 m-2 bg-whiter' />
                <div className='m-2'>
                    <TailButton color='blue' caption='확인' onClickEvent={RenewCard} />
                    <TailButton color='blue' caption='취소' onClickEvent={() => { setJsonData(null) }} />
                </div>
            </div>
            <div className='p-5 grid grid-cols-3 overflow-y-scroll'>
                {
                    jsonData && jsonData.response.body.items.item.map((item, index) => (
                        <TailCard key={index} imageSrc={item.galWebImageUrl} title={item.galTitle} description={item.galPhotographyLocation} />
                    ))
                }
                {/* <TailCard imageSrc='' title='테스트입니다.' description='설명테스트입니다.'/> */}
            </div>
        </div>
    )
}
