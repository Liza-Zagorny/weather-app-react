import SearchCurrentWeather from "./components/SearchCurrentWeather";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <SearchCurrentWeather />
      <p>
        <a href="https://github.com/Liza-Zagorny/weather-app-react">
          Open-source code
        </a>{" "}
        by Liza Neiman
      </p>
    </div>
  );
}

export default App;
