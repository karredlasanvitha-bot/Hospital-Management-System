import { Outlet } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-shell">
      <HeaderContainer />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
