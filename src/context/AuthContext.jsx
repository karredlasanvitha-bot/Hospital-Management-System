import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => sessionStorage.getItem("loggedInUser") || "");
  const [isRegistered, setIsRegistered] = useState(
    () => !!localStorage.getItem("hospitalAccount")
  );

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("loggedInUser", user);
    } else {
      sessionStorage.removeItem("loggedInUser");
    }
  }, [user]);

  const signup = (username, email, password) => {
    localStorage.setItem(
      "hospitalAccount",
      JSON.stringify({ username, email, password })
    );
    setIsRegistered(true);
  };

  const login = (email, password) => {
    const account = JSON.parse(localStorage.getItem("hospitalAccount") || "null");
    if (
      account &&
      email.trim().toLowerCase() === account.email?.toLowerCase() &&
      password === account.password
    ) {
      setUser(account.username);
      return true;
    }
    return false;
  };

  const logout = () => setUser("");

  const resetAccount = () => {
    localStorage.removeItem("hospitalAccount");
    sessionStorage.removeItem("loggedInUser");
    setIsRegistered(false);
    setUser("");
  };

  return (
    <AuthContext.Provider
      value={{ user, isRegistered, signup, login, logout, resetAccount, isLoggedIn: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
