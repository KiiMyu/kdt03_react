import './App.css'
import Hello from './01/Hello'
import CurrentTime from './01/CurrentTime'
import MyClockTime from './02/MyClockTime';
import MyDiv1 from './03/MyDiv1';
import MyList from './04/MyList';
import MyToggle from './05/MyToggle';
import Header from './components/Header';
import Footer from './components/Footer';
import Lotto from './06/Lotto';
import Food from './07/Food';
import MyEffect from './08/MyEffect';
import BoxOffice from './09/BoxOffice';
import Traffic from './10/Traffic';
import MyRef from './11/MyRef';
import RefCal from './12/RefCal';
import Gallery from './13/Gallery';
import BusanFestival from './14_1/BusanFestival';
import RouteMain from './15/RouteMain';
import FestivalContents from './14/FestivalContents';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChargeInfo from './16/ChargeInfo';
import ChargerCard from './16/ChargerCard';
//import JotaiCnt from './17/JotaiCnt';
import Todolist from './18_3/Todolist';
import Subway from './19/Subway';

function App() {

  const pageMap = [
    { name: "시계", url: "/", element: <MyClockTime />, isHide: false },
    { name: "로또", url: "/lotto", element: <Lotto />, isHide: false },
    { name: "푸드마켓", url: "/food", element: <Food />, isHide: false },
    { name: "박스오피스", url: "/boxoffice", element: <BoxOffice />, isHide: false },
    { name: "갤러리", url: "/gallery", element: <Gallery />, isHide: false },
    { name: "축제정보", url: "/festival", element: <BusanFestival />, isHide: false },
    { name: "festivalcontent", url: "/festival/content", element: <FestivalContents />, isHide: true },
    { name: "자동차충전소", url: "/chargeinfo", element: <ChargeInfo />, isHide: false },
    { name: "자동차충전소상세", url: "/chargeinfo/detail", element: <ChargerCard />, isHide: true},
    { name: "TodoList", url: "/todolist" , element: <Todolist />, isHide: false},
    { name: "지하철공기정보", url: "/subway", element: <Subway />, isHide: false},
       //{ name: "전역변수", url:"/jotaicnt", element: <JotaiCnt />, isHide: false},
  ];

  // console.log(pageMap)

  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        {/* <MyDiv1/> */}
        {/* <MyList /> */}
        <Header pageMap={pageMap} />
        <main className='container mx-auto flex flex-col flex-grow  overflow-auto'>
          {/* <MyToggle/> */}
          {/* <Lotto/> */}
          {/* <Food/> */}
          {/* {<MyEffect />} */}
          {/* <MyClockTime/> */}
          {/* <BoxOffice /> */}
          {/* <Traffic /> */}
          {/* <MyRef /> */}
          {/* <RefCal /> */}
          {/* <Gallery /> */}
          {/* <BusanFestival /> */}
          {/* <RouteMain /> */}
          <Routes>
            {
              pageMap.map((item, index) => {
                return <Route path={item["url"]} element={item["element"]} />
              })
            }
            {/* <Route path="/" element={<MyClockTime />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/food" element={<Food />} />
            <Route path="/festival/content" element={<BusanFestival />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
