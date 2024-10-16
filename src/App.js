import "./App.css";
import Category from "./Components/Category/category.js";
import Navbar from "./Components/navbar/navbar.js";
import Search from "./Components/search_pannel/search.js";
import Pannel from "./Components/sidePannel/pannel.js";
import Profile from "./Components/Gallery/profiles.js";
import Footer from "./Components/footer/footer.js";
function App() {
  return (
    <div className="App">
      <div className="div_container">
        <div className="conatiner1">
          <Pannel />
        </div>
        <div className="container2">
          <Navbar />
          <Search />
          <Category />
          <Profile />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
