import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Swomething from "./Styled/Swomething";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contents/>
      <Swomething/>
      <Footer/>
    </div>
  );
}

export default App;
