import Contents from "./Pages/Contents";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Catalogue from "./Pages/Catalogue";
import NotFound from "./Pages/NotFound";
import ItemPage from "./Pages/ItemPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Contents/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path='/items' element={<ItemPage/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
