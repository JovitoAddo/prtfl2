import Contents from "./Pages/Contents";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Catalogue from "./Pages/Catalogue";
import NotFound from "./Pages/NotFound";
import ItemPage from "./Pages/ItemPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
// import { useContext } from "react";
// import { Context } from "./AppContext";
// import MenWear from "./Pages/MenWear";

function App() {
  // const {isLogin} = useContext(Context)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Contents/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path='/items' element={<ItemPage/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
