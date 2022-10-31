import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Catalogue from "./Components/Catalogue";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contents />} />
          <Route path='/Catalogue' element={<Catalogue/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
