import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LoginPromptModal from "../components/common/LoginPromptModal";

const AuthPromptContext = createContext(null);

export function AuthPromptProvider({ children }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState({
    open: false,
    redirectTo: "/appointment",
    prefill: null,
    message: "Please log in to continue.",
  });

  const requireAuth = (redirectTo, prefill = null, message) => {
    if (isLoggedIn) {
      navigate(redirectTo, prefill ? { state: { prefill } } : undefined);
      return true;
    }

    setPrompt({
      open: true,
      redirectTo,
      prefill,
      message: message || "Please log in to continue.",
    });
    return false;
  };

  const closePrompt = () =>
    setPrompt((prev) => ({ ...prev, open: false }));

  const goToLogin = () => {
    navigate("/login", {
      state: {
        from: prompt.redirectTo,
        prefill: prompt.prefill,
      },
    });
    closePrompt();
  };

  return (
    <AuthPromptContext.Provider value={{ requireAuth }}>
      {children}
      <LoginPromptModal
        open={prompt.open}
        message={prompt.message}
        onClose={closePrompt}
        onLogin={goToLogin}
      />
    </AuthPromptContext.Provider>
  );
}

export function useAuthPrompt() {
  const ctx = useContext(AuthPromptContext);
  if (!ctx) throw new Error("useAuthPrompt must be used within AuthPromptProvider");
  return ctx;
}
