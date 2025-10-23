import React from 'react'

export default function TrafficInfo({ searchJsonData }) {

    const viewChart = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

    return (
        <div key={`info` + searchJsonData['도로종류']} className='flex flex-row justify-between items-center w-full p-2 m-2 border-2'>
            <div className='w-full'>{searchJsonData['도로종류']}</div>
            {
                viewChart.map(chart => {
                    return (
                    <div key={`info` + searchJsonData['도로종류'] + chart} className='flex flex-row justify-between items-center w-9/10'>
                        <div className='bg-green-600 px-5 py-2'> {chart} </div>
                        <div className='flex flex-1 justify-center'> {parseInt(searchJsonData[chart])} </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
