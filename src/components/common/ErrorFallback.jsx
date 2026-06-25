export default function ErrorFallback({ onRetry }) {
  return (
    <div className="error-fallback">
      <div className="error-fallback__card">
        <div className="error-fallback__icon">⚠️</div>
        <h2>Something went wrong</h2>
        <p>
          We encountered an unexpected error. Please try again or return to the
          homepage.
        </p>
        <div className="error-fallback__actions">
          {onRetry && (
            <button type="button" className="btn btn--primary" onClick={onRetry}>
              Try Again
            </button>
          )}
          <a href="/" className="btn btn--outline">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
