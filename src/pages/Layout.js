import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
}
