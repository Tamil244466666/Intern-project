import FormPage from './Pages/FormPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Component/Navbar.jsx';
import Footer from './Component/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/form' element={<FormPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
