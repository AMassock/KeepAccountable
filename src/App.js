import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Bills,
  Bill,
  Congress,
  // Navbar,
  // NotFound,
  AuthForm,
  Layout,
} from "./pages/index";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/bill/:congress/:type/:number" element={<Bill />} />
          <Route path="/congressMembers/" element={<Congress />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<AuthForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
