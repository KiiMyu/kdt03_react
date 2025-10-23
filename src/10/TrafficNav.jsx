import React from 'react'
import TailButton from '../components/TailButton'

export default function TrafficNav({ titlename, navdata, selectC, setSelectC }) {

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='font-bold flex items-center px-4 py-2'>
                    {titlename}
                </div>
                <div className='flex flex-row'>
                    {
                        navdata.map(item => <TailButton key={`navdata_` + item} color={selectC == item ? `orange` : `blue`} caption={item} onClickEvent={() => setSelectC(item)}/>)
                    }
                </div>
            </div>
        </div>
    )
}
