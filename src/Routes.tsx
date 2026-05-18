import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/Home';
import AddReceita from './pages/receita/AdicionarReceita';
// import Configuroes from './pages/configuracoes';
// import Favoritos from './pages/favoritos';
// import Explorar from './pages/explorar';
import Error from './pages/error/Error';
import Perfil from './pages/perfil/Perfil';
import EditarPerfil from './pages/perfil/EditarPerfil';

const AppRoutes = () =>{
  return(
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/receita/nova' element={<AddReceita/>}/>
        <Route path='/perfil/editar' element={<EditarPerfil/>}/>
        {/* <Route path='/favoritos' element={<Configuracoes/>}/> */}
        {/* <Route path='/mensagens' element={<Favoritos/>}/> */}
        {/* <Route path='/explorar' element={<Explorar/>}/> */}
        <Route path='/perfil/:perfilId' element={<Perfil/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path="*"      element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
