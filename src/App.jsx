import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          {/* HOME (the page with the search bar) */}
          <Route path="/search" element={<Search/>} />
          {/* SEARCH (the page with the results) */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
