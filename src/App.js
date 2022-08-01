import SearchCurrentWeather from "./components/SearchCurrentWeather";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <SearchCurrentWeather defaultCity="Toronto" />
      <footer>
        <a href="https://github.com/Liza-Zagorny/weather-app-react">
          Open-source code
        </a>{" "}
        by Liza Neiman
      </footer>
    </div>
  );
}

export default App;
