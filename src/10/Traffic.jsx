import React from 'react'
import TrafficNav from './TrafficNav'
import trafficData from "./교통사고통계.json"
import TrafficInfo from './TrafficInfo'

import { useState, useEffect } from 'react'

export default function Traffic() {
    // 전체 데이터.
    const [tdata, setTdata] = useState([]);

    // 대분류 데이터.
    const [c1, setC1] = useState([]);
    const [selectC1, setSelectC1] = useState();

    // 중분류 데이터.
    const [c2, setC2] = useState([]);
    const [selectC2, setSelectC2] = useState();

    // 분류된 데이터.
    const [searchData, setSearchData] = useState([]);

    const getFetchData = async () => {
        //const url;

        //Fetch(url)

        // setTdata(trafficData);

        let accidentURL = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&returnType=json&serviceKey=${import.meta.env.VITE_ACCIDENT_API}`;

        try {
        let accidentData = await fetch(accidentURL);
        let data = await accidentData.json();

        console.log(data);

        setTdata(data.data);

        } catch(error) {
            console.error(err);
        }

    }

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        //console.log(tdata);
        setC1(c1 => [...new Set(tdata.map(item => item['사고유형대분류']))]);

    }, [tdata]);

    useEffect(() => {
        //console.log(selectC1);
        setC2(c2 => [...new Set(tdata.filter(item => item['사고유형대분류'] == selectC1).map(item => item['사고유형중분류']))]);
        setSearchData([]);
    }, [selectC1]);

    

    useEffect(() => {
        setSearchData(tdata.filter(item => item['사고유형대분류'] == selectC1 && item['사고유형중분류'] == selectC2));
    }, [selectC2])

    return (
        <div className='p-10'>
            <div>
                {c1 && <TrafficNav titlename='교통사고 대분류' navdata={c1} selectC={selectC1} setSelectC={setSelectC1} />}
                {c2 && <TrafficNav titlename='교통사고 중분류' navdata={c2} selectC={selectC2} setSelectC={setSelectC2} />}
            </div>
            <div>
                <div className='flex flex-col justify-between items-center'>
                    {searchData.length != 0 &&
                        searchData.map(item => {
                            return (
                                <TrafficInfo key={`trafficinfo` + item['도로종류']} searchJsonData={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
