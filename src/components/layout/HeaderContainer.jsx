import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import HeaderView from "./HeaderView";

export default function HeaderContainer() {
  const { isLoggedIn, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <HeaderView
      isLoggedIn={isLoggedIn}
      user={user}
      onLogout={handleLogout}
      mobileOpen={mobileOpen}
      onToggleMobile={() => setMobileOpen((o) => !o)}
    />
  );
}
