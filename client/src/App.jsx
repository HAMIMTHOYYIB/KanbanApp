import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Home from "./pages/Home";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<div>signup page</div>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
