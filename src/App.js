import Navbar from '../src/components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Page2 from './components/folder2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/page4/Page4';
import Page5 from './components/page5/Page5';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Favourites from './components/Favourites';





function App() {
  return (
    <div className="App container-fluid">

    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}> </Route> 
    <Route path='Navbar' element={<Navbar/>}></Route>
    <Route path='Page3' element={<Page3/>}> </Route>
    <Route path='Page2' element={<Page2/>}> </Route>
    <Route path='Page4' element={<Page4/>}> </Route>
    <Route path='Page5' element={<Page5/>}> </Route>
    <Route path='Favourites' element={<Favourites/>}></Route>
 
    </Routes>
    </BrowserRouter>
    {/* <Home/> */}

   {/* <Navbar/> */}
   
   {/* <Page2/>
   <Page3/>
   <Page4/>
   <Page5/> */}
    </div>
  );
}

export default App;
