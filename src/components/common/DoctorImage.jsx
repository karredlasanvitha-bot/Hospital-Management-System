import { useState } from "react";

export default function DoctorImage({ src, alt, className = "" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`doctor-image-placeholder ${className}`.trim()} aria-label={alt}>
        <span className="doctor-image-placeholder__icon">👨‍⚕️</span>
        <span className="doctor-image-placeholder__text">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
