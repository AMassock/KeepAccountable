import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  // Home,
  // Dashboard,
  Bills,
  Navbar,
  // NotFound,
  Layout,
} from "./pages/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/bills" element={<Bills />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
