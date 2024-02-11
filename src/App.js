
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
  
        <div>
          <Header/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/search' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
        </div>
      
     {/* <h1>Mutharamman Thunai</h1> */}
   
     <Footer/>
    </div>
  );
}

export default App;
