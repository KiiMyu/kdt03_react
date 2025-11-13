import React from 'react'
import SubwayBox from './SubwayBox'
import scode from './scode.json'
import sarea from './sarea.json'
import TailSelect from '../components/TailSelect'
import { useEffect, useState } from 'react'

export default function Subway() {
    const [ jsonData, setJsonData ] = useState()
    const [ area, setArea ] = useState('')

    const connectSubwayInfo = async(selectSpace = '') => {
        const date = new Date()

        let dateString = date.getFullYear().toString()
        dateString += (date.getMonth() + 1).toString()
        dateString += (date.getDate()).toString()
        //dateString += "06";

        //console.log(dateString);

        let url = `/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=${import.meta.env.VITE_ACCIDENT_API}&pageNo=1&numOfRows=100&resultType=json&controlnumber=${dateString}`
        if(selectSpace != '') {
            url += `&areaIndex=${selectSpace.target.value}`
        } else {
            return
        }

        // console.log(url)

        try {
            let resp = await fetch(url)
            let data = await resp.json()

            console.log(data)
            setJsonData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        connectSubwayInfo()
    }, [])

    return (
        <div>
            <div className="flex flex-row justify-center items-center w-9/10 p-5">
                <div className="font-bold text-center text-3xl w-4/10">
                    측정소 선택
                </div>
                <div className="flex flex-col justify-start w-5/10">
                    <div>
                        { <TailSelect id="subwayair" title="--- 측정소 선택 ---" opk={sarea.map(area => area["코드"])} opv={sarea.map(area => area["측정소"])} onHandle={connectSubwayInfo} />}
                    </div>
                </div>
            </div>
            <div className="">
                {jsonData && <SubwayBox data={jsonData}/>}
            </div>
        </div>
    )
}
