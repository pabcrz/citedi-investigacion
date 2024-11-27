import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LGAC from "./pages/LGAC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lgac" element={<LGAC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
