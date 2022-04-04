import { Route, Routes } from "react-router-dom";
import Home from "./Components/Admin/Home/Home";
import Main from "./Components/Main/Main";
function App() {
  return (
    // Root file
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
