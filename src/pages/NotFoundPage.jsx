import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page">
      <div className="empty-state empty-state--lg">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="btn btn--primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
