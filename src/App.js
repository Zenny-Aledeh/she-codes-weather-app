import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This projected is created by Zeinab Abu and is{" "}
          <a
            href="https://github.com/Zenny-Aledeh/she-codes-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
