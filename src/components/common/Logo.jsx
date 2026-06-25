import { HOSPITAL_NAME } from "../../data/hospitalData";

export default function Logo({ size = "md" }) {
  return (
    <div className={`logo logo--${size}`}>
      <svg viewBox="0 0 48 48" className="logo-icon" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00838f" />
            <stop offset="100%" stopColor="#00695c" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#logoGrad)" />
        <path
          d="M24 34c-6-4.5-10-8.2-10-13a5 5 0 0 1 9-2.8A5 5 0 0 1 34 21c0 4.8-4 8.5-10 13z"
          fill="#fff"
        />
        <path
          d="M12 28h24"
          stroke="#c9a227"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="36" cy="12" r="4" fill="#c9a227" />
      </svg>
      <div className="logo-text">
        <span className="logo-name">{HOSPITAL_NAME.split(" ")[0]}</span>
        <span className="logo-sub">{HOSPITAL_NAME.split(" ").slice(1).join(" ")}</span>
      </div>
    </div>
  );
}
