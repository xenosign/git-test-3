import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Item from "./pages/Item";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Signup2 from "./pages/Signup2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup2" element={<Signup2 />} />
    </Routes>
  );
}

export default App;
