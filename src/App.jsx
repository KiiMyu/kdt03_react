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

function App() {
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
     {/* <MyDiv1/> */}
     {/* <MyList /> */}
     <Header/>
     <main className='container mx-auto flex flex-col flex-grow  overflow-auto'>
     {/* <MyToggle/> */}
     <Lotto/>
     </main>
    <Footer/>
      </div>
  );
}

export default App
