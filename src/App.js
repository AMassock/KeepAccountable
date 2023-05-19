import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  // Dashboard,
  Bills,
  Bill,
  // Navbar,
  // NotFound,
  Layout,
} from "./pages/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/bill/:congress/:type/:number" element={<Bill />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
