import React, { useState } from 'react'
import scode from './scode.json'

export default function SubwayBox({ data}) {
    // 툴팁 상태 관리 (표시여부, 내용, 위치)
    const [tooltip, setTooltip] = useState({
        visible: false,
        content: '',
        x: 0,
        y: 0
    });

    // 마우스 박스 위로 상세내용 툴팁처럼 표시하는 부분 -> 코드 어시스트 사용.
    // 마우스가 박스에 진입했을 때 툴팁 표시
    const handleMouseEnter = (e, description) => {
        setTooltip({
            visible: true,
            content: description,
            x: e.clientX,
            y: e.clientY
        });
    };

    // 마우스가 박스에서 나갔을 때 툴팁 숨김
    const handleMouseLeave = () => {
        setTooltip({
            ...tooltip,
            visible: false
        });
    };

    // 마우스 움직임에 따라 툴팁 위치 업데이트
    const handleMouseMove = (e) => {
        if (tooltip.visible) {
            setTooltip({
                ...tooltip,
                x: e.clientX,
                y: e.clientY
            });
        }
    };

    return (
        <div className="">
            {/* 시간대별 데이터를 controlnumber 순으로 정렬하여 렌더링 */}
            {data.response.body.items.item.sort((a,b) => a["controlnumber"] - b["controlnumber"]).map((timeValue, idx) =>
                <div key={`timevalue${timeValue["site"]}${timeValue["controlnumber"]}${idx}`} className="flex flex-col">
                    {/* 시간대와 측정 사이트명 표시 */}
                    <div className="p-2">
                        {`${String(timeValue["controlnumber"]).substring(8, 10)}시 (${timeValue["site"]})`}
                    </div>
                    
                    {/* 9개 컬럼으로 구성된 측정항목 그리드 */}
                    <div className="grid grid-cols-9">
                        {Object.keys(scode).map((keyname, codeidx) =>
                            <div 
                                key={`timevalue${timeValue["site"]}${timeValue["controlnumber"]}${idx}_${codeidx}`}
                                className="flex flex-col border-2 border-gray-300 rounded-xl m-0.5 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                                // 마우스 이벤트 핸들러 추가
                                onMouseEnter={(e) => handleMouseEnter(e, scode[keyname].description)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                {/* 상단: 측정항목명과 단위 */}
                                <div className={`p-2 text-center rounded-t-xl ${idx % 2 == 0 ? 'bg-green-300' : 'bg-sky-300'}`}>
                                    {`${scode[keyname].name}`}
                                    <br/>
                                    {`(${scode[keyname].unit})`}
                                </div>
                                
                                {/* 하단: 측정값 */}
                                <div className="p-2 rounded-b-xl text-center">
                                    {timeValue[keyname]}
                                </div>
                            </div>)}
                    </div>
                </div>)}

            {/* 툴팁 컴포넌트 - 조건부 렌더링 */}
            {tooltip.visible && (
                <div 
                    className="fixed z-50 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none max-w-xs"
                    style={{
                        left: tooltip.x + 10, // 마우스 커서 오른쪽에 표시
                        top: tooltip.y - 40,  // 마우스 커서 위쪽에 표시
                    }}
                >
                    {/* 툴팁 화살표 (말풍선 효과) */}
                    <div className="absolute bottom-[-6px] left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
                    {tooltip.content}
                </div>
            )}
        </div>
    )
}
