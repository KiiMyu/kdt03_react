import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai'

export default function BoxOffice() {
    const [movieTags, setMovieTags] = useState([]);
    const [poster, setPoster] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');

    const [translatedText, setTranslatedText] = useState('');

    const getFetchData = (inputDate) => {
        const apiKey = import.meta.env.VITE_MV_API;

        const baseurl = `/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`

        let yesterday;

        if (!inputDate || new Date(inputDate) >= new Date()) {
            yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
        } else {
            yesterday = new Date(inputDate);
        }

        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');

        const formattedDate = `${year}${month}${day}`

        let url = `${baseurl}key=${apiKey}&targetDt=${formattedDate}`

        console.log(url);

        fetch(url) // 대신 const resp = await fetch(url) 으로 쓸 수 있음. 대신 위에 async 도 선언해야함.
            .then(resp => resp.json())
            .then(data => {
                //console.log(data)
                const listData = data.boxOfficeResult.dailyBoxOfficeList;
                console.log(listData)

                let tags = listData.map((item, idx) => {
                    let rankDisplay;
                    // 순위 정보.
                    if (item.rankOldAndNew == 'NEW') {
                        rankDisplay = 'NEW!';
                    } else if (item.rankInten > 0) {
                        rankDisplay = `+${item.rankInten}`;
                    } else if (item.rankInten < 0) {
                        rankDisplay = `-${Math.abs(item.rankInten)}`;
                    } else {
                        rankDisplay = `0`;
                    }

                    return (
                        <tr key={`tr` + idx} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200" onClick={() => getPoster(item.movieNm)}>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.rank}
                            </th>
                            <th scope="row" className={`px-4 py-2 font-medium 
                                ${item.rankInten > 0 ? 'text-red-800' :
                                    item.rankInten < 0 ? 'text-blue-800' :
                                        'text-gray-900'} whitespace-nowrap 
                                dark:${item.rankInten > 0 ? 'text-red-500' :
                                    item.rankInten < 0 ? 'text-blue-500' :
                                        'text-white'}`}>
                                {rankDisplay}
                            </th>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.movieNm}
                            </th>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {parseInt(item.audiCnt).toLocaleString()}
                            </th>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {parseInt(item.salesAmt).toLocaleString()}
                            </th>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {parseInt(item.audiAcc).toLocaleString()}
                            </th>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {parseInt(item.salesAcc).toLocaleString()}
                            </th>
                        </tr>);
                })

                setMovieTags(tags);
            })
            .catch(err => console.log(err))
    }

    const getPoster = async (movieName) => {
        console.log(movieName)
        let posterAPIKey = import.meta.env.VITE_MV_POSTER_API;
        let posterURL = `http://api.themoviedb.org/3/search/movie?api_key=${posterAPIKey}&query=${encodeURIComponent(movieName)}`

        console.log(posterURL)

        fetch(posterURL)
            .then(resp => resp.json())
            .then(async data => {
                console.log(data)
                if (data.results.length > 0) {
                    setPoster(
                        <img src={`https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`} className='h-100 object-contain' />
                    )
                    setDescription(
                        <div>
                            <p className='text-3xl m-5'>{movieName}</p>
                            <p className='m-5'>번역중...</p>
                        </div>
                    )
                            // 번역 함수를 await으로 호출
                            const translatedOverview = await tranlateOverview(data.results[0].overview);
                    setDescription(
                        <div>
                            <p className='text-3xl m-5'>{movieName}</p>
                            <p className='m-5'>{translatedOverview}</p>
                        </div>
                    )
                    return;
                }
                setPoster(<></>)
            })
            .catch(error => console.log(error));


    }

    const handleDateChange = (changedate) => {
        const newdate = changedate.target.value;
        setSelectedDate(newdate);
        getFetchData(newdate);
    }

    // gemini 번역 API 를 통한 오버뷰 번역.
    const tranlateOverview = async (overviewText) => {
        if(overviewText == null || overviewText == '') {
            return;
        }

        const transKey = import.meta.env.VITE_MV_TRANS_API; // TODO : 동작 확인 필요.;
        const getAI = new GoogleGenerativeAI(transKey);

        console.log(transKey)

        try {
            // 사용 모델
            const model = getAI.getGenerativeModel({model: 'gemini-2.5-flash'});

            // 번역 프롬프트 생성
            const prompt = `다음 영어 문장을 한국어로 번역해줘: ${overviewText}`;
            
            // GeminiAPI에 번역 요청
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            console.log('번역된 텍스트:', text);

            setTranslatedText(text);
            return text;
        } catch (error) {
            console.error('번역 중 오류 발생:', error);
            return overviewText;
        }

        return translatedText;

    }

    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`
        setSelectedDate(formattedDate)
        getFetchData()
    }, []);

    // TODO : Gemini API 등으로 overview 자동 번역 해보기. axios 를 사용하는듯.

    return (
        <div className='flex flex-col'>
            <div className='h-2/10 flex justify-center'>
                <input type='date' value={selectedDate} onChange={handleDateChange} />
            </div>
            <div className="w-9/10 shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                순위
                            </th>
                            <th scope="col" className="px-6 py-3">
                                변동
                            </th>
                            <th scope="col" className="px-6 py-3">
                                제목
                            </th>
                            <th scope="col" className="px-6 py-3">
                                관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                매출액
                            </th>
                            <th scope="col" className="px-6 py-3">
                                누적관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                누적매출액
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieTags}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row justify-between w-8/10 m-5 border border-black'>
                <div className='h-full w-full object-cover'>
                    {poster}
                </div>
                <div className='m-5'>
                    {description}
                </div>
            </div>
        </div>
    )
}