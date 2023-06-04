import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/adduser' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
