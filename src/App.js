import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
