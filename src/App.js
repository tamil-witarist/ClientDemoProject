// import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import TokenCheck from "./components/TokenCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TokenCheck Component={Login} />} />
        <Route path="/dashboard" element={<TokenCheck Component={Dashboard} />} />
        {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
