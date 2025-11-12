import { atom } from "jotai";

export const selGuAtom = atom(null);
export const festivalFetchData = atom(async () => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${import.meta.env.VITE_ACCIDENT_API}&pageNo=1&numOfRows=45&resultType=json&type=json`

    let resp = await fetch(url);
    let data = await resp.json();

    return data;
});