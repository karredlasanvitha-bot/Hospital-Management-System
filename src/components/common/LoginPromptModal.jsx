import { Link } from "react-router-dom";

export default function LoginPromptModal({ open, message, onClose, onLogin }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-prompt-title"
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal__icon">🔐</div>
        <h3 id="login-prompt-title">Login Required</h3>
        <p>{message}</p>
        <div className="modal__actions">
          <button type="button" className="btn btn--primary btn--full" onClick={onLogin}>
            Go to Login
          </button>
          <Link to="/signup" className="btn btn--outline btn--full" onClick={onClose}>
            Create Account
          </Link>
          <button type="button" className="btn btn--sm modal__cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
