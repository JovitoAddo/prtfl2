import Contents from "./Pages/Contents";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Catalogue from "./Pages/Catalogue";
import NotFound from "./Pages/NotFound";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
// import MenWear from "./Pages/MenWear";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Contents/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path='/items' element={<ItemPage/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
