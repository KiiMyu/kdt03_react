import './App.css'
import Hello from './01/Hello'
import CurrentTime from './01/CurrentTime'
import MyClockTime from './02/MyClockTime';
import MyDiv1 from './03/MyDiv1';
import MyList from './04/MyList';

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
     {/* <MyDiv1/> */}
     <MyList />
    </div>
  );
}

export default App
