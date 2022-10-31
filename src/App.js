import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Catalogue from "./Components/Catalogue";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Contents/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
