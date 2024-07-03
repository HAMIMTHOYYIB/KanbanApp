import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<div>signin page</div>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
