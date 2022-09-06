import { Routes, Route } from "react-router-dom"
import Register from "./components/Register"
import HeaderFooter from "./components/HeaderFooter"
import Login from "./components/Login"
import Home from "./components/Home"
import Add from "./components/Add"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter link1='register' link2="login"><Register /></HeaderFooter>} />
      <Route path="/register" element={<HeaderFooter link1='register' link2="login"><Register /></HeaderFooter>} />
      <Route path="/login" element={<HeaderFooter link1='register' link2="login"><Login /></HeaderFooter>} />
      <Route path="/home" element={<HeaderFooter link1='home' link2="add"><Home /></HeaderFooter>} />
      <Route path="/add" element={<HeaderFooter link1='home' link2="add"><Add /></HeaderFooter>} />
    </Routes>
  );
}

export default App;
