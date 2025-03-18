import ReactDOM from "react-dom/client";

import App from "./App3.jsx";
import "./index.css";
import "./components/Header/Header.css"
import "./components/CoreConcepts.css"

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
