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
import BusanFestival from './14/BusanFestival';
import RouteMain from './15/RouteMain';

function App() {
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      {/* <MyDiv1/> */}
      {/* <MyList /> */}
      <Header />
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
        <RouteMain />
      </main>
      <Footer />
    </div>
  );
}

export default App
