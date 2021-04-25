import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
