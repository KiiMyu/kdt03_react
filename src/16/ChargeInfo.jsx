import React from 'react'
import { useState } from 'react'
import TailSelect from '../components/TailSelect'
import TailButton from '../components/TailButton'
import zcode from "../data/zcode.json"
import zscode from "../data/zscode.json"
import kind from "../data/kind.json"
import kinddetail from "../data/kinddetail.json"
import busid from "../data/busid.json"
import { Link } from 'react-router-dom'

export default function ChargeInfo() {

    const [select1, setSelect1] = useState('')
    const [select2, setSelect2] = useState('')
    const [select3, setSelect3] = useState('')
    const [select4, setSelect4] = useState('')

    const [chargerJson, setChargerJson] = useState([]);

    const ChangeSelect1 = (e) => {
        if (e.target.value == '') {
            return
        }
        setSelect1(e.target.value)
    }

    const ChangeSelect2 = (e) => {
        if (e.target.value == '') {
            return
        }
        setSelect2(e.target.value.toString())
    }


    const ChangeSelect3 = (e) => {
        if (e.target.value == '') {
            return
        }
        setSelect3(e.target.value)
    }

    const ChangeSelect4 = (e) => {
        if (e.target.value == '') {
            return
        }
        setSelect4(e.target.value)
    }

    // 검색
    const LoadChargeInfo = async () => {
        const api = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${import.meta.env.VITE_ACCIDENT_API}&pageNo=1&numOfRows=100&zcode=${select1}&zscode=${select2}&kind=${select3}&kindDetail=${select4}&dataType=JSON`

        console.log(api)
        try {
            const resp = await fetch(api)
            const jsonData = await resp.json()

            console.log(jsonData.items)

            let nameMapData = new Map();

            jsonData.items.item.map(item => {
                if (nameMapData.has(item["statNm"])) {
                    let itemStat = nameMapData.get(item["statNm"])
                    itemStat.push(item)
                    nameMapData.set(item["statNm"], itemStat)
                } else {
                    nameMapData.set(item["statNm"], new Array(item))
                }
            })

            console.log(nameMapData)

            //setChargerJson(jsonData)
            setChargerJson(nameMapData)
        } catch (e) {

        }

    }

    return (
        <div className="flex flex-col justify-start items-center">
            <div className="flex justify-center text-4xl m-10">
                전기차 충전소 정보
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <TailSelect id="sel1" title="시도" opk={Object.keys(zcode)} opv={Object.values(zcode)} onHandle={ChangeSelect1} />
                {select1 && <TailSelect id="sel2" title="구" opk={Object.values(zscode[select1])} opv={Object.keys(zscode[select1])} onHandle={ChangeSelect2} />}
                {select2 && <TailSelect id="sel3" title="시설종류" opk={Object.keys(kind)} opv={Object.values(kind)} onHandle={ChangeSelect3} />}
                {select3 && <TailSelect id="sel4" title="세부시설종류" opk={Object.values(kinddetail[select3])} opv={Object.keys(kinddetail[select3])} onHandle={ChangeSelect4} />}
                <TailButton color="blue" caption="검색" onClickEvent={LoadChargeInfo}>검색</TailButton>
                <TailButton color="orange" caption="취소" onClickEvent={() => { }}>취소</TailButton>
            </div>
            <div className="grid grid-cols-5">
                {
                    // chargerJson?.items?.item && chargerJson.items.item.map((item, idx) => {
                    //     return <Link to="/chargeinfo/detail" key={"charge"+idx} state={item}>
                    //         <div className="border-2 hover:cursor-pointer px-2 py-5 m-2">
                    //             {item["statNm"]}
                    //         </div>
                    //     </Link> 
                    // })
                }
                {
                    chargerJson && Array.from(chargerJson.keys()).map((item, idx) => {
                        return <Link to="/chargeinfo/detail" key={"charge" + idx} state={chargerJson.get(item)}>
                            <div className="border-2 hover:cursor-pointer px-2 py-5 m-2">
                                {item}
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
