import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Error from './pages/error/Error';

const AppRoutes = () =>{
  return(
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path="*"      element={<Error />} /> 
        {/* <Route path='/' element={<Perfil/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
