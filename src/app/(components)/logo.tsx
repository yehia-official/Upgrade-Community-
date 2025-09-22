export function Logo() {
  return (
    <div className="flex items-center gap-3" title="Upgrade - Level Up Your Skills">
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g fill="url(#logoGradient)">
          {/* Motion lines for U */}
          <rect x="5" y="35" width="12" height="6" rx="3" />
          <rect x="10" y="45" width="8" height="6" rx="3" />
          <rect x="2" y="55" width="15" height="6" rx="3" />
          <rect x="8" y="65" width="10" height="6" rx="3" />

          {/* Letter U */}
          <path d="M25,20 V55 C25,75 45,75 45,55 V20 H58 V55 C58,85 20,85 20,55 V20 H25 Z" />
          
          {/* Letter P with arrow */}
          <path d="M65,20 V80 H78 V50 C95,50 95,30 78,30 H65 Z M86,48 C86,40 75,40 75,48 C75,56 86,56 86,48 Z" />
          <path d="M78,40 L90,28 L78,16 Z" transform="rotate(15, 84, 34)" />
        </g>
      </svg>
      <span className="font-headline text-xl font-bold">Upgrade</span>
    </div>
  );
}
