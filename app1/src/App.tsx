import { Route, Routes } from "react-router-dom";
import Index from "views";
import ErrorPage from "views/errorPage";
import Registr from "views/registr";
import "./App.scss";
import Login from "views/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
