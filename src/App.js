
import './App.css';
import Navbar from './components/Navbar';
import { Routes ,Route} from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/EditProduct' element={<EditProduct/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
