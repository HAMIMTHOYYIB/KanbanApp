import SearchBar from "./components/SearchBar";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Taskview from "./components/Taskview";
const App = () => {
  return (
    <Provider store={Store}>
      <div className="bg-white text-black font-sans">
        <SearchBar />
        <Taskview />
      </div>
    </Provider>
  );
};

export default App;
