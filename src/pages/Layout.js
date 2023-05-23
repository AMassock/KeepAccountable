import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./index";

export default function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
