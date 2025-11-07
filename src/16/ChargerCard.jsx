import React from 'react'
import { useLocation } from 'react-router-dom';
import chargerType from '../data/chgertype.json';
import stat from '../data/stat.json';

export default function ChargerCard() {
    const bgColor = {
        "blue" : "bg-blue-100",
        "orange" : "bg-orange-100:"
    }

    const location = useLocation();
    const item = location.state;

    console.log(item)

  return (
    <div className="flex flex-col m-10">
      <div className="text-3xl p-5">
        {
          `${item[0]["statNm"]}`
        }
      </div>
      <div>
        { `주소 : ${item[0]["addr"]}`}
      </div>
            <div>
        { `사용시간 : ${item[0]["useTime"]}`}
      </div>
      <div className="grid grid-cols-3">
      {
        item.map((item, idx) => 
          <div key={`charger`+idx} className="flex flex-col m-2 p-2 bg-amber-200 rounded-2xl">
            <div className="m-2">
              {`충전기` + (idx+1)}
            </div>
            <div>
              {`제조 / 공급사 : ${item["maker"]}`}
            </div>
            <div>
              {`충전기 타입 : ${chargerType[item["chgerType"]]}`}
            </div>
            <div>
              {`상태 : ${item["limitYn"] == "N" ? stat[item["stat"]] : `사용불가`}`}
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}
