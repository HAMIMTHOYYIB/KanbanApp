import SearchBar from "../components/SearchBar"
import Taskview from "../components/Taskview"

const Home = () => {
  return (
    <div className="bg-white text-black font-sans">
    <SearchBar />
    <Taskview />
  </div>
  )
}

export default Home;
